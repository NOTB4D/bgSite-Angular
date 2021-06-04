import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
logo:string="assets/image/logo.jpg"
check:boolean;
email=this.localstorageservice.get("email");
user:User= new User();

  constructor(
    private authservice:AuthService,
    private toastrservice:ToastrService,
    private localstorageservice:LocalStorageService,
    private userservice:UserService,
    private router:Router) { }

  ngOnInit(): void {
   this.load();
   
  }
 
load(){
  this.check = this.authservice.isAuthenticated();
  this.getEmail();
  this.chechToEmail();
}

  logOut(){
    this.localstorageservice.clean()
    this.toastrservice.success("Çıkış Yaptınız");
    this.router.navigate(["/"]).then(r => window.location.reload())
  }

  chechToEmail(){
    if(this.localstorageservice.get("email")){
      return true;
    }else{
      return false;
    }
  }
getEmail(){
  if(this.email){
    this.userservice.getByMail(this.email).subscribe(response=>{
      this.user=response;
      this.authservice.getClaims(this.user.Id).subscribe(response=>{
        if(response.data.name=="Admin"){
          this.localstorageservice.set("yetki",response.data.name);
          this.localstorageservice.set("Id",this.user.Id.toString());
        }
      })
    })
  }

}

}
