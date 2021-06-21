import { AdressService } from './../../../services/adress.service';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { CityService } from 'src/app/services/city.service';
import { city } from 'src/app/models/city';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.css']
})
export class AdressComponent implements OnInit {

  email=this.localstorageservice.get("email");
  user:User = new User();
  cities:city[]=[];
  adressAddForm:FormGroup
  constructor(private formbuilder:FormBuilder,
    private userservice:UserService,
     private adresservice:AdressService,
     private localstorageservice:LocalStorageService,
     private toasterservice:ToastrService,
     private cityservice:CityService,
     public matdialogref:MatDialogRef<AdressComponent>) { }

  ngOnInit(): void {
    this.creatAdresAddForm();
    this.getallcity();
    this.getEmail();
  }

  getallcity(){
    this.cityservice.getAllCity().subscribe(response =>{
      this.cities=response.data;
    })
   }

  getEmail(){
    this.userservice.getByMail(this.email).subscribe(response =>{
       this.user=response;   
    })
  }

  creatAdresAddForm(){
    this.adressAddForm=this.formbuilder.group({
     userId:[""],
     adres:["", Validators.required],
     adressName:["", Validators.required],
     zipCode:["", Validators.required],
     city:["", Validators.required],
     country:["", Validators.required]
    });
  }

  addAdress(){
    if(this.adressAddForm.valid){
      let adressForm = Object.assign({},this.adressAddForm.value);
      let userId = this.user.id;
      adressForm.userId=userId;
      this.adresservice.addAdress(adressForm).subscribe(response=>{
        this.toasterservice.success(response.messages)
      })
      this.onclose();
    }
  }

  onclose(){
    this.matdialogref.close();
  }
}
