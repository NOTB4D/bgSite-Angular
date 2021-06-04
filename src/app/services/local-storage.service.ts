import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  localStorege:Storage;

  constructor() { 
    this.localStorege = window.localStorage;
  }


  get(key:string){
    return this.localStorege.getItem(key);
  }

  set(key :string, value: string){
    this.localStorege.setItem(key,value);
  }

  remove(key:string){
    this.localStorege.removeItem(key);
  }

  clean(){
    this.localStorege.clear();
  }
}
