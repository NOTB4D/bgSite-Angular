import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { city } from 'src/app/models/city';
import { CartService } from 'src/app/services/cart.service';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
cartItems:CartItem[];
cities:city[]=[];
count:number;
  constructor(private cartservice:CartService,
    private toastrservice:ToastrService,
    private cityservice:CityService) { }

  ngOnInit(): void {
    this.getcart();
    this.getallcity();
  }

  getcart(){
    this.cartItems=JSON.parse(localStorage.getItem('cartItems'));
    }

    getallcity(){
     this.cityservice.getAllCity().subscribe(response =>{
       this.cities=response.data;
     })
    }
}
