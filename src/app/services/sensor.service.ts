import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class SensorService  {

  public _apiEndPoint: string;

  constructor(
        private http: HttpClient,
        protected _controllerEndPoint: String) {
        this._apiEndPoint = environment.urlApi + 'api/';
      }
}
