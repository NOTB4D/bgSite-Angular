import { LocalStorageService } from './local-storage.service';
import { listResponseModel } from './../models/listResponModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { Claims } from '../models/claims';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
yetki:string;
  apiUrl = "https://localhost:44366/api/";
  constructor(private httpClient:HttpClient,
    private localstorageservice:LocalStorageService) { }

  login(loginModel: LoginModel){
   return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"Auth/login",loginModel)
  }

  register(registerModel:RegisterModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"Auth/register",registerModel)
  }
  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }

  isadmin(){
    this.yetki=this.localstorageservice.get("yetki");
    if(this.yetki==="Admin"){
      return true;
    }else{
      return false;
    }

  }

  getClaims(Id:number):Observable<SingleResponseModel<Claims>>{
   let newPath=this.apiUrl+"User/claim?Id="+Id
   return this.httpClient.get<SingleResponseModel<Claims>>(newPath);
  }

}
