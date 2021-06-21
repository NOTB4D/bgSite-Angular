import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  subTotal:number=0;
  grandTotal:number=0;
  constructor(private localstorageservice:LocalStorageService) { }

  addtoCart(product:Product){
    let Item = CartItems.find(c => c.product.productID===product.productID);
    if(Item){
      Item.quantity+=1;
      
    }else{
      let cartItem = new CartItem()
      cartItem.product=product;
      cartItem.quantity=1;
      CartItems.push(cartItem)
    }
    this.localstorageservice.set('cartItems', JSON.stringify(CartItems));
  }

  removeFromCart(product:Product){
    let item = CartItems.find(c => c.product.productID===product.productID);
    if(item.quantity>1){
      item.quantity-=1;
    } else{
      CartItems.splice(CartItems.indexOf(item),1); 
    }
    this.localstorageservice.set('cartItems', JSON.stringify(CartItems));
  }

  list():any{
    return CartItems;
    // return JSON.parse(localStorage.getItem('cartItems'));
  }

  getcart(){
    this.grandTotal=0;
    for(let item of CartItems)
    {
      this.subTotal=(item.product.unitPrice*item.quantity);
      this.grandTotal+=this.subTotal;
      // this.localstorageservice.set("grandtotal",this.grandTotal.toString());
      
    }
    return this.grandTotal;
   }
}
