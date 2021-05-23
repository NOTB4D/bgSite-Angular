import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { productImage } from 'src/app/models/productImage';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[];
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.getcart();
  }


  getcart(){
   this.cartItems=this.cartService.list();
  }

  removeFromCart(productImage:productImage){
    this.cartService.removeFromCart(productImage);
  }
}
