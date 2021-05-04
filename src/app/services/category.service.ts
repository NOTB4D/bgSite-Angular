import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';
import { listResonseModel } from '../models/listResponModel';
import { category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = "https://localhost:44366/api/Category/GetAll";
  constructor(private httpClient:HttpClient) { }

  getCategory():Observable<listResonseModel<category>>{
    return this.httpClient.get<listResonseModel<category>>(this.apiUrl);
    }

}
