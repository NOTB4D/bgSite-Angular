import { CarouselImage } from './../models/carouselImage';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listResponseModel } from '../models/listResponModel';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  apiUrl = "https://localhost:44366/api/";
  constructor(private httpClient:HttpClient) { }


  getcarousel():Observable<listResponseModel<CarouselImage>>{
    let newPath = this.apiUrl+"CarouselImage/GetAll"
    return this.httpClient.get<listResponseModel<CarouselImage>>(newPath);
  }
}
