import { LocalStorageService } from './local-storage.service';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

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

  list():CartItem[]{
    return CartItems;
    // return JSON.parse(localStorage.getItem('cartItems'));
  }

  
}
