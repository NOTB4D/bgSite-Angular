import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponModel';
import { Product } from '../models/product';
import { productdetails } from '../models/productdetails';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:44366/api/";
  constructor(private httpClient:HttpClient) { }

  getProduct():Observable<listResponseModel<Product>>{
    let newpath=this.apiUrl+"Products/GetAll"
    return this.httpClient.get<listResponseModel<Product>>(newpath);
    }


   addProduct(product:Product):Observable<ResponseModel>{
     let newPath = this.apiUrl+"Products/Add"
     return this.httpClient.post<ResponseModel>(newPath,product);
   } 

   getProductBysubcategoryId(subcategoryId:number):Observable<listResponseModel<productdetails>>{
     let newPath = this.apiUrl+"Products/getproductDetailsBySubcategory?Id="+subcategoryId
     return this.httpClient.get<listResponseModel<productdetails>>(newPath)
   }
}
