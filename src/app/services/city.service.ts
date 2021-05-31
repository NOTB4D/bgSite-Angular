import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { city } from '../models/city';
import { listResponseModel } from '../models/listResponModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  apiUrl = "https://localhost:44366/api/";
  constructor(private httClient:HttpClient) { }

  getAllCity():Observable<listResponseModel<city>>{
    let newPath = this.apiUrl+"City/GetAllCity"
    return this.httClient.get<listResponseModel<city>>(newPath);
  }
  AddCity(city:city):Observable<ResponseModel>{
    let newPath = this.apiUrl+"City/Add"
    return this.httClient.post<ResponseModel>(newPath,city);
  }

  updatecity(cityId:number):Observable<ResponseModel>{
    let newPath =this.apiUrl+"City/UpdateCity"
    return this.httClient.post<ResponseModel>(newPath,cityId);
  }
  deletecity(cityId:number):Observable<ResponseModel>{
    let newPath = this.apiUrl+"City/Delete?cityId="+cityId
    return this.httClient.post<ResponseModel>(newPath,cityId);
  }
}
