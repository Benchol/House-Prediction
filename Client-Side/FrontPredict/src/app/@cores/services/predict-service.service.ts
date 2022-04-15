import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { House } from '../models/house.model';
@Injectable({
  providedIn: 'root'
})
export class PredictServiceService {

  apiUrl: string = "http://localhost:5000/";

  constructor(private http: HttpClient) { }

  predictHousePrice(house: House) {
    return <Promise<string>>this.http.post(`${this.apiUrl}api/`, { house }, { responseType: 'text' }).toPromise();
  }

  getResultPrediction() {
    return <Promise<number>>this.http.get<number>(`${this.apiUrl}`).toPromise();
  }

}
