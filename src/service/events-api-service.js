import ApiService from '../framework/api-service.js';
import { Buffer } from 'buffer';


const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE'
};

const DATA_AUTH = {
  USERNAME: 'Anatoly',
  PASSWORD: 'qwerty'
};

export default class EventsApiService extends ApiService {
  get events(){
    return this._load({url: 'points'})
      .then(ApiService.parseResponse);
  }

  get destinations(){
    return this._load({url: 'destinations'})
      .then(ApiService.parseResponse);
  }

  get offers(){
    return this._load({url: 'offers'})
      .then(ApiService.parseResponse);
  }

  async updateEvent(event){
    const response = await this._load({
      url: `points/${event.id}`,
      method: Method.PUT,
      body: JSON.stringify(this.#adaptToServer(event)),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  }

  async addEvent(event){
    const response = await this._load({
      url: 'points',
      method: Method.POST,
      body: JSON.stringify(this.#adaptToServer(event)),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  }

  async deleteEvent(event){
    const response = await this._load({
      url: `points/${event.id}`,
      method: Method.DELETE
    });

    return response;
  }

  #adaptToServer(event){
    const adaptedEvent = {...event,
      'base_price':  parseInt(event.basePrice, 10),
      'date_from': event.dateFrom,
      'date_to': event.dateTo,
      'is_favorite':  event.isFavorite
    };

    delete adaptedEvent.basePrice;
    delete adaptedEvent.dateFrom;
    delete adaptedEvent.dateTo;
    delete adaptedEvent.isFavorite;

    return adaptedEvent;
  }

  static getStringBasicAuth(){
    return `Basic ${Buffer.from(`${DATA_AUTH.USERNAME}:${DATA_AUTH.PASSWORD}`).toString('base64')}`;
  }
}
