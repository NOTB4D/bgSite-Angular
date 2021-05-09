import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponModel';
import { category } from '../models/category';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = "https://localhost:44366/api/";
  constructor(private httpClient:HttpClient) { }

  getCategory():Observable<listResponseModel<category>>{
    let newPath=this.apiUrl+"Category/GetAll"
    return this.httpClient.get<listResponseModel<category>>(newPath);
    }

    AddCategory(category:category):Observable<ResponseModel>{
      let newPath = this.apiUrl+"Category/Add"
      return this.httpClient.post<ResponseModel>(newPath,category);
    }

}
