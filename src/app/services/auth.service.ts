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
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
yetki:string;
  apiUrl = "https://localhost:44366/api/";
  currentUserId: number;
  currentRoles: string;
  jwtHelperService: JwtHelperService = new JwtHelperService()

  constructor(private httpClient:HttpClient,
    private localstorageservice:LocalStorageService) { this.setUserStats() }

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

  setCurrentUserId() {
    var decoded = this.getDecodedToken()
    var propUserId = Object.keys(decoded).filter(x => x.endsWith("/nameidentifier"))[0];
    this.currentUserId = Number(decoded[propUserId]);
  }

  setRoles() {
    var decoded = this.getDecodedToken()
    var propUserId = Object.keys(decoded).filter(x => x.endsWith("/role"))[0];
    this.currentRoles = String(decoded[propUserId]);
  }

  getCurrentRoles(): string {
    return this.currentRoles
  }

  getCurrentUserId(): number {
    return this.currentUserId
  }
  
  getDecodedToken() {
    try {
      return this.jwtHelperService.decodeToken(this.localstorageservice.getToken());
    }
    catch (Error) {
      return null;
    }
  }

  logout() {
    this.localstorageservice.remove("token");
  }
  loggedIn(): boolean {
    let isExpired = this.jwtHelperService.isTokenExpired(this.localstorageservice.getToken());
    return !isExpired;
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


  async setUserStats() {
    if (this.loggedIn()) {
      this.setCurrentUserId()
      this.setRoles()
    }
  }
}
