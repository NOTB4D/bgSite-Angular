import { LocalStorageService } from './../../services/local-storage.service';
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
    private route:Router,
    private localstorageservice:LocalStorageService) { }

  ngOnInit(): void {
    this.load();
    this.getcart();
  }
   load(){
  this.cartItems=JSON.parse(localStorage.getItem('cartItems'));
  }

  getcart(){
   this.cartService.getcart();
    this.grandTotal=this.cartService.getcart();
   }

   removeFromCart(product:Product){
    this.cartService.removeFromCart(product);
      this.toastrservice.error("Ürün Sepetten Cıkartıldı",product.productName)
      this.ngOnInit();
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
    this.ngOnInit();
  }
}
