import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResonseModel } from '../models/listResponModel';
import { subCategory } from '../models/subCategory';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  apiUrl = "https://localhost:44366/api/SubCategoryConttroller/GetById";
  constructor(private httpClient:HttpClient) { }

  getSubCategoryById():Observable<listResonseModel<subCategory>>{
    return this.httpClient.get<listResonseModel<subCategory>>(this.apiUrl);
    }


}
