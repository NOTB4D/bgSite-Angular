import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { paymentCard } from '../models/paymentCard';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  apiUrl = "https://localhost:44366/api/";
  constructor(private httpClient:HttpClient ) { }


addPay(paymentCard:paymentCard):Observable<ResponseModel>{
  let newPath=this.apiUrl+"Pay/Pay"
  return this.httpClient.post<ResponseModel>(newPath,paymentCard);
}

}
