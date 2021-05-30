import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { CartItems } from 'src/app/models/cartItems';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cartbag',
  templateUrl: './cartbag.component.html',
  styleUrls: ['./cartbag.component.css']
})
export class CartbagComponent implements OnInit {
  cartItems:CartItem[];
  subTotal:number;
  grandTotal:number=0;
  constructor(private cartService:CartService,
    private toastrservice:ToastrService,
    private route:Router) { }

  ngOnInit(): void {
    this.getcart();
    if(this.cartItems.length===0)
    {
      this.route.navigate(['/']);
    }
  }


  getcart(){
    this.cartItems=this.cartService.list();
    for(let item of this.cartItems)
    {
      this.subTotal=(item.product.unitPrice*item.quantity);
      this.grandTotal+=this.subTotal;
    }
   }
   removeFromCart(product:Product){
    this.cartService.removeFromCart(product);
      this.toastrservice.error("Ürün Sepetten Cıkartıldı",product.productName)
      if(this.cartItems.length===0)
    {
      this.route.navigate(['/']);
    }
  }

  addtoCart(product:Product){
    if(product.unitsInStock===0){
      this.toastrservice.error("Hata","Ürün Stokta Yok")
    }
    this.toastrservice.success("Sepete eklendi",product.productName)
    this.cartService.addtoCart(product)
  }
}
