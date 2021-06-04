import { listResponseModel } from './../models/listResponModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://localhost:44366/api/";

  constructor(private httpClient:HttpClient) { }


  getByMail(email:string):Observable<User>{
    let newPth=this.apiUrl+"User/GetByMail?mail="+email
    return this.httpClient.get<User>(newPth)
  }
}
