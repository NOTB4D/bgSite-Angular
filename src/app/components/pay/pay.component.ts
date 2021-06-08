import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { city } from 'src/app/models/city';
import { paymentCard } from 'src/app/models/paymentCard';
import { CartService } from 'src/app/services/cart.service';
import { CityService } from 'src/app/services/city.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PayService } from 'src/app/services/pay.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
cartItems:CartItem[];
cities:city[]=[];
count:number;
paymetcard:paymentCard;
paycardform:FormGroup
  constructor(private cartservice:CartService,
    private toastrservice:ToastrService,
    private cityservice:CityService,
    private formbuilder:FormBuilder,
    private payservice:PayService) { }

  ngOnInit(): void {
    this.getcart();
    this.getallcity();
    this.creatform();
    
  }

  getcart(){
    this.cartItems=JSON.parse(localStorage.getItem('cartItems'));
    }

    getallcity(){
     this.cityservice.getAllCity().subscribe(response =>{
       this.cities=response.data;
     })
    }
creatform(){
  this.paycardform=this.formbuilder.group({
    CardHolderName:[""],
    CardNumber:[""],
    ExpireMonth:[""],
    ExpireYear :[""],
    Cvc :[""],
    RegisterCard:[1],
    Name:[""],
    Surname:[""],
    Email:[""],
    IdentityNumber:[""],
    RegistrationAddress:[""],
    City:[""],
    Country:[""],
  })

}

Addcard(){
  let creditcarmodel = Object.assign(this.paycardform.value)
  this.payservice.addPay(creditcarmodel).subscribe(response =>{
    this.toastrservice.success(response.messages);
        this.ngOnInit();
  console.log(creditcarmodel)      
  })
}
    
}
