import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { brand } from '../models/brand';
import { listResponseModel } from '../models/listResponModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = "https://localhost:44366/api/";
  constructor(private httpClient:HttpClient) { }


addBran(brand:brand):Observable<ResponseModel>{
  let newPath=this.apiUrl+"Brand/Add"
  return this.httpClient.post<ResponseModel>(newPath,brand);
}

getBrand():Observable<listResponseModel<brand>>{
  let newPath=this.apiUrl+"Brand/GetAll"
  return this.httpClient.get<listResponseModel<brand>>(newPath);
  }
updateBrand(brand:brand):Observable<ResponseModel>{
  let newPath = this.apiUrl+"Brand/Update"
  return this.httpClient.post<ResponseModel>(newPath,brand);
}

deleteBrand(brandId:number):Observable<ResponseModel>{
  let newPath = this.apiUrl+"Brand/Delete?brandId="+brandId
  return this.httpClient.post<ResponseModel>(newPath,brandId);
}

getBrandById(brandId:number):Observable<SingleResponseModel<brand>>{
  let newPath = this.apiUrl+"Brand/GetById?Id="+brandId
  return this.httpClient.get<SingleResponseModel<brand>>(newPath);
}

}
