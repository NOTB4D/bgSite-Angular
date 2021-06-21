import { SingleResponseModel } from './../models/singleResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adress } from '../models/adress';
import { listResponseModel } from '../models/listResponModel';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class AdressService {

  apiUrl = "https://localhost:44366/api/";
  constructor(private httpClient:HttpClient) { }


  addAdress(adress:Adress):Observable<ResponseModel>{
    let newPath=this.apiUrl+"Adress/Add"
    return this.httpClient.post<ResponseModel>(newPath,adress);
  }

  getAdress(userId:number):Observable<SingleResponseModel<Adress>>{
    let newPath=this.apiUrl+"Adress/Get?UserId="+userId
    return this.httpClient.get<SingleResponseModel<Adress>>(newPath);
  }

  getAllAdressByUserId(userId:number):Observable<listResponseModel<Adress>>{
    let newPath=this.apiUrl+"Adress/GetAllByUserId?UserId="+userId
    return this.httpClient.get<listResponseModel<Adress>>(newPath);
  }
}
