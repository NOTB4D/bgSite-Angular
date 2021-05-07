import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResonseModel } from '../models/listResponModel';
import { subCategory } from '../models/subCategory';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  apiUrl = "https://localhost:44366/api/";
  constructor(private httpClient:HttpClient) { }

  getSubCategoryById(categoryId:number):Observable<listResonseModel<subCategory>>{
    let newPath=this.apiUrl+"SubCategories/GetByCategoryId?id="+categoryId
    return this.httpClient.get<listResonseModel<subCategory>>(newPath);
  }
getSubCategory():Observable<listResonseModel<subCategory>>{
  let newPath=this.apiUrl+"SubCategories/Get"
  return this.httpClient.get<listResonseModel<subCategory>>(newPath);
}

}
