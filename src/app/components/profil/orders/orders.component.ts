import { OrderDetail } from './../../../models/orderDetail';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
 
  email=this.localstorageservice.get("email");
  user:User = new User();
  orders:OrderDetail[]=[];
  constructor(private orderservice:OrderService,
    private userservice:UserService,
    private localstorageservice:LocalStorageService,) { }

  ngOnInit(): void {
    this.getEmail()
  }

  getOrders(id:number){
    this.orderservice.GetOrder(id).subscribe(response =>{
      this.orders=response.data;
      console.log(this.orders)
    })
  }

  getEmail(){
    this.userservice.getByMail(this.email).subscribe(response =>{
       this.user=response;
          if(this.user.id){
             this.getOrders(this.user.id)
            }   
    })
  }
}
