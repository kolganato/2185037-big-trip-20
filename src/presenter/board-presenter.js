import { remove, render, RenderPosition, replace } from '../framework/render.js';
import UiBlocker from '../framework/ui-blocker/ui-blocker.js';
import EventListView from '../view/event-list-view.js';
import SortView from '../view/sort-view.js';
import EventEmptyView from '../view/event-list-empty-view.js';
import EventPresenter from './event-presenter.js';
import NewEventPresenter from './new-event-presenter.js';
import NewEventButtonView from '../view/new-event-button-view.js';
import LoadingView from '../view/loading-view.js';

import { sort } from '../utils/sort.js';
import { SortType, UpdateType, UserAction, FilterType } from '../const.js';
import { filter } from '../utils/filter.js';

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000
};

export default class BoardPresenter {
  #eventListComponent = new EventListView();
  #loadingComponent = new LoadingView();
  #sortComponent = null;
  #eventEmptyComponent = null;
  #newEventButton = null;
  #newEventButtonContainer = null;

  #container = null;
  #destinationsModel = null;
  #offersModel = null;
  #eventsModel = null;
  #filterModel = null;

  #eventPresenters = new Map();
  #newEventPresenter = null;

  #currentSortType = SortType.DAY;
  #filterType = FilterType.EVERYTHING;
  #isCreating = false;
  #isLoading = true;
  #uiBlocker = new UiBlocker({
    lowerLimit: TimeLimit.LOWER_LIMIT,
    upperLimit: TimeLimit.UPPER_LIMIT
  });

  constructor({
    container,
    newEventContainer,
    destinationsModel,
    offersModel,
    eventsModel,
    filterModel,
  }){
    this.#container = container;
    this.#newEventButtonContainer = newEventContainer;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#eventsModel = eventsModel;
    this.#filterModel = filterModel;

    this.#newEventPresenter = new NewEventPresenter({
      eventListContainer: this.#eventListComponent.element,
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel,
      onDataChange: this.#viewActionHandler,
      onDestroy: this.#newEventDestroyHandler
    });

    this.#eventsModel.addObserver(this.#modelEventHandler);
    this.#filterModel.addObserver(this.#modelEventHandler);
  }

  get events(){
    this.#filterType = this.#filterModel.filter;
    const events = this.#eventsModel.events;
    const filteredEvents = filter[this.#filterType](events);

    return sort[this.#currentSortType](filteredEvents);
  }

  init(){
    this.#newEventButton = new NewEventButtonView({
      onClick: this.#newEventButtonClickHandler
    });
    render(this.#newEventButton, this.#newEventButtonContainer);

    this.#renderBoard();
  }

  #renderEvent(event){
    const eventPresenter = new EventPresenter({
      container: this.#eventListComponent.element,
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel,
      onDataChange: this.#viewActionHandler,
      onModeChange: this.#modeChangeHandler
    });

    eventPresenter.init(event);

    this.#eventPresenters.set(event.id, eventPresenter);
  }

  #renderLoading(){
    render(this.#loadingComponent, this.#container, RenderPosition.BEFOREEND);
  }

  #clearEventList(){
    this.#newEventPresenter.destroy();
    this.#eventPresenters.forEach((presenter) => presenter.destroy());
    this.#eventPresenters.clear();
  }

  #clearBoard({resetSortType = false} = {}){
    this.#clearEventList();

    remove(this.#sortComponent);

    if(this.#eventEmptyComponent){
      remove(this.#eventEmptyComponent);
    }

    if(this.#loadingComponent){
      remove(this.#loadingComponent);
    }

    if(resetSortType){
      this.#currentSortType = SortType.DAY;
    }
  }

  #renderSort() {
    const prevSortComponent = this.#sortComponent;

    this.#sortComponent = new SortView({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#sortTypeChangeHandler
    });

    if(prevSortComponent){
      replace(this.#sortComponent, prevSortComponent);
      remove(prevSortComponent);
    }else{
      render(this.#sortComponent, this.#container);
    }

    render(this.#sortComponent, this.#container, RenderPosition.BEFOREEND);
  }

  #renderEventEmpty(){
    this.#eventEmptyComponent = new EventEmptyView({
      filterType: this.#filterType
    });
    render(this.#eventEmptyComponent, this.#container, RenderPosition.BEFOREEND);
  }

  #renderEvents(events){
    events.forEach((event) => this.#renderEvent(event));
  }

  #renderEventList(){
    render(this.#eventListComponent, this.#container);
  }

  #renderBoard(){

    if(this.#isLoading){
      this.#renderLoading();
      return;
    }

    if(!this.#eventsModel.hasEvents() && !this.#isCreating){
      this.#renderEventEmpty();
      return;
    }

    this.#renderSort();
    this.#renderEventList();
    this.#renderEvents(this.events);
  }

  createEvent(){
    this.#currentSortType = SortType.DAY;
    this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    this.#newEventPresenter.init();
  }

  #sortTypeChangeHandler = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;

    this.#clearBoard();
    this.#renderBoard();
  };

  #viewActionHandler = async (actionType, updateType, update) => {
    this.#uiBlocker.block();

    switch (actionType) {
      case UserAction.UPDATE_EVENT:
        this.#eventPresenters.get(update.id).setSaving();
        try {
          await this.#eventsModel.update(updateType, update);
        } catch (error) {
          this.#eventPresenters.get(update.id).setAborting();
        }
        break;
      case UserAction.ADD_EVENT:
        this.#newEventPresenter.setSaving();
        try {
          await this.#eventsModel.add(updateType, update);
        } catch (error) {
          this.#newEventPresenter.setAborting();
        }
        break;
      case UserAction.DELETE_EVENT:
        this.#eventPresenters.get(update.id).setDeleting();
        try {
          await this.#eventsModel.delete(updateType,update);
        } catch (error) {
          this.#eventPresenters.get(update.id).setAborting();
        }
        break;
    }

    this.#uiBlocker.unblock();
  };

  #modelEventHandler = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#eventPresenters.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearBoard();
        this.#renderBoard();
        break;
      case UpdateType.MAJOR:
        this.#clearBoard({resetSortType: true});
        this.#renderBoard();
        break;
      case UpdateType.INIT:
        this.#isLoading = false;
        remove(this.#loadingComponent);
        this.#renderBoard();
        break;
    }
  };

  #modeChangeHandler = () => {
    this.#newEventPresenter.destroy();
    this.#eventPresenters.forEach((presenter) => presenter.resetView());
  };

  #newEventButtonClickHandler = () => {
    this.#isCreating = true;
    this.createEvent();
    this.#newEventButton.setDisabled(true);
  };

  #newEventDestroyHandler = () => {
    this.#isCreating = false;
    this.#newEventButton.setDisabled(false);

    if(!this.#eventsModel.hasEvents()){
      remove(this.#sortComponent);
      this.#sortComponent = null;
      this.#renderEventEmpty();
    }
  };
}
