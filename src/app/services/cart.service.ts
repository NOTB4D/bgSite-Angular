import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';
import { productImage } from '../models/productImage';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addtoCart(product:Product){
    let item = CartItems.find(c => c.product.productID===product.productID);
    if(item){
      item.quantity+=1;
    }else{
      let cartItem = new CartItem()
      cartItem.product=product;
      cartItem.quantity=1;
      CartItems.push(cartItem)
    }
  }

  removeFromCart(product:Product){
    let item = CartItems.find(c => c.product.productID===product.productID);
    if(item.quantity>1){
      item.quantity-=1;
    } else{
      CartItems.splice(CartItems.indexOf(item),1); 
    }
    
  }

  list():CartItem[]{
    return CartItems;
  }

  
}
