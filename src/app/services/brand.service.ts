import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';

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

}
