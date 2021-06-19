import { Observable } from 'rxjs';
import { Customer } from './../models/customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44366/api/";
  constructor(private httpClient:HttpClient) { }


  AddCustomer(customer:Customer):Observable<ResponseModel>{
    let newPath = this.apiUrl+"Customer/Add"
    return this.httpClient.post<ResponseModel>(newPath,customer);
  }

  getCustomerById(Id:number):Observable<SingleResponseModel<Customer>>{
    let newPath = this.apiUrl+"Customer/GetById?Id="+Id
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath);
  }

  UpdateCustomer(customer:Customer):Observable<ResponseModel>{
    let newPath = this.apiUrl+"Customer/Update"
    return this.httpClient.post<ResponseModel>(newPath,customer);
  }
}
