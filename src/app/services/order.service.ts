import { OrderDetail } from './../models/orderDetail';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponModel';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl = "https://localhost:44366/api/";
  constructor(private httClient:HttpClient) { }

  GetOrder(ıd:number):Observable<listResponseModel<OrderDetail>>{
    let newPath = this.apiUrl+"Order/Get?UserId="+ıd
    return this.httClient.get<listResponseModel<OrderDetail>>(newPath);
  }


}
