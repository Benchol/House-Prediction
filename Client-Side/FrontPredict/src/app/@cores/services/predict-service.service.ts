import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { House } from '../models/house.model';
@Injectable({
  providedIn: 'root'
})
export class PredictServiceService {

  apiUrl: string = "http://127.0.0.1:5000/";

  constructor(private http: HttpClient) { }

  predictHousePrice(house: House) {
    return <Promise<House>>this.http.post<House>(`${this.apiUrl}`, { house }).toPromise();
  }

  getResultPrediction() {
    return <Promise<number>>this.http.get<number>(`${this.apiUrl}`).toPromise();
  }

}
