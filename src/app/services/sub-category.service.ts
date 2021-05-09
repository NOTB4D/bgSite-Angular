import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponModel';
import { ResponseModel } from '../models/responseModel';
import { subCategory } from '../models/subCategory';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  apiUrl = "https://localhost:44366/api/";
  constructor(private httpClient:HttpClient) { }

  getSubCategoryById(categoryId:number):Observable<listResponseModel<subCategory>>{
    let newPath=this.apiUrl+"SubCategories/GetByCategoryId?id="+categoryId
    return this.httpClient.get<listResponseModel<subCategory>>(newPath);
  }
getSubCategory():Observable<listResponseModel<subCategory>>{
  let newPath=this.apiUrl+"SubCategories/Get"
  return this.httpClient.get<listResponseModel<subCategory>>(newPath);
}
addSubcategory(subcategory:subCategory):Observable<ResponseModel>{
  let newPath=this.apiUrl+"SubCategories/Add"
  return this.httpClient.post<ResponseModel>(newPath,subcategory);
}

}
