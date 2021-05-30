import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cartbag',
  templateUrl: './cartbag.component.html',
  styleUrls: ['./cartbag.component.css']
})
export class CartbagComponent implements OnInit {
  cartItems:CartItem[];
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.getcart();
  }


  getcart(){
    this.cartItems=this.cartService.list();
    
   }
}
