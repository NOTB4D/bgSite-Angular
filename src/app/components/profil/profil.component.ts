import { AdressService } from './../../services/adress.service';
import { AdressComponent } from './adress/adress.component';
import { Customer } from './../../models/customer';
import { UserService } from './../../services/user.service';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CustomerService } from 'src/app/services/customer.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Adress } from 'src/app/models/adress';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  
  email=this.localstorageservice.get("email");
  user:User = new User();
  customer:Customer =new Customer();
  customerAddForm:FormGroup
  userAddForm:FormGroup
  dataLoaded=false;
  adress:Adress[]=[];
  constructor(private localstorageservice:LocalStorageService,
    private userservice:UserService,
    private formbuilder:FormBuilder,
    private customerservice:CustomerService,
    private toasterservice:ToastrService,
    private dialog:MatDialog ,
    private adresservice:AdressService) { }

  ngOnInit(): void {
    this.getEmail();
    this.creatCustomerAddForm();
    this.creatUserrAddForm();
    
  }


getEmail(){
  this.userservice.getByMail(this.email).subscribe(response =>{
     this.user=response;
        if(this.user.id){
           this.getcustomer(this.user.id)
           this.dataLoaded=true
           this.getAdresByUserId(this.user.id);
           
          }
          
  })
}



getAdresByUserId(id:number){
  this.adresservice.getAllAdressByUserId(id).subscribe(response=>{
    this.adress=response.data
  })
}

getcustomer(id:number){
  this.customerservice.getCustomerById(id).subscribe(response=>{
    this.customer=response.data;
  })
}

creatUserrAddForm(){
  this.userAddForm=this.formbuilder.group({
    id: this.user.id,
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", Validators.required],
    status: true
  })
}

creatCustomerAddForm(){
  this.customerAddForm=this.formbuilder.group({
    phoneNumber:[""],
    birthDay:[""],
    identityNumber:[""]
  })
}

AddCustomer(){
  if(this.customerAddForm.valid){
    let customermodel = Object.assign({},this.customerAddForm.value)
     let userId = this.user.id;
     customermodel.userId=userId
    this.customerservice.AddCustomer(customermodel).subscribe(response =>{
      this.toasterservice.success(response.messages)
      this.ngOnInit();
    })
  }
}
UpdateCustomer(){
   if(this.customerAddForm.valid){
    let customermodel = Object.assign(this.customerAddForm.value);
    // let usermodel =Object.assign(this.userAddForm.value);
     let userId = this.user.id;
     customermodel.userId=userId
    //  this.userservice.profileUpdate(usermodel).subscribe(response=>{
    //    this.toasterservice.success(response.messages)
    //  });
    this.customerservice.UpdateCustomer(customermodel).subscribe(response =>{
      this.toasterservice.success(response.messages)
      
    })
  }
}


onCreate(){
this.dialog.open(AdressComponent);
}

}
