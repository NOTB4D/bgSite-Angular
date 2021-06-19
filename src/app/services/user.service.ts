import { listResponseModel } from './../models/listResponModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { ResponseModel } from '../models/responseModel';

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

  profileUpdate(user: User): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'User/updateprofile', {
      user: {
        'id': user.id,
        'firstName': user.firstName,
        'lastName': user.lastName,
        'email': user.email,
        'status': user.status
      },
      password: user.password
    });
  }
}
