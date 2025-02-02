import AbstractView from '../framework/view/abstract-view.js';
import { FilterType } from '../const.js';

const EmptyEventTextType = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no past events now',
  [FilterType.PAST]: 'There are no present events now',
  [FilterType.PRESENT]:'There are no future events now'
};

function createEventListTemplate(filterType){
  return `<p class="trip-events__msg">${EmptyEventTextType[filterType]}</p>`;
}

export default class EventEmptyView extends AbstractView {
  #filterType = null;

  constructor({filterType}){
    super();
    this.#filterType = filterType;
  }

  get template(){
    return createEventListTemplate(this.#filterType);
  }
}
