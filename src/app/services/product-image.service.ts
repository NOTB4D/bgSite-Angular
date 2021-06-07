import { ProductsImage } from './../models/productsImage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class ProductImageService {
  apiUrl = "https://localhost:44366/api/";
  constructor(private httpClient:HttpClient) { }

  addImage(productImage:ProductsImage):Observable<ResponseModel>{
    let newPath = this.apiUrl+"ProductImage/add";
    return this.httpClient.post<ResponseModel>(newPath,productImage)
  }
}
