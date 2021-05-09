import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:44366/api/Products/GetAll";
  constructor(private httpClient:HttpClient) { }

  getProduct():Observable<listResponseModel<Product>>{
    return this.httpClient.get<listResponseModel<Product>>(this.apiUrl);
    }
}
