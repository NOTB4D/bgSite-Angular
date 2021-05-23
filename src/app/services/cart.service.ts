import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { productImage } from '../models/productImage';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addtoCart(productImage:productImage){
    let item = CartItems.find(c => c.productImage.productId===productImage.productId);
    if(item){
      item.quantity+=1;
    }else{
      let cartItem = new CartItem()
      cartItem.productImage=productImage;
      cartItem.quantity=1;
      CartItems.push(cartItem)
    }
  }

  removeFromCart(productImage:productImage){
    let item = CartItems.find(c=>c.productImage.productId===productImage.productId);
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
