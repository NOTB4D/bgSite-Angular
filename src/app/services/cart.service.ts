import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

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
    localStorage.setItem('cartItems', JSON.stringify(CartItems));
  }

  removeFromCart(product:Product){
    let item = CartItems.find(c => c.product.productID===product.productID);
    if(item.quantity>1){
      item.quantity-=1;
    } else{
      CartItems.splice(CartItems.indexOf(item),1); 
    }
    localStorage.setItem('cartItems', JSON.stringify(CartItems));
  }

  list():CartItem[]{
    return CartItems;
    // return JSON.parse(localStorage.getItem('cartItems'));
  }

  
}
