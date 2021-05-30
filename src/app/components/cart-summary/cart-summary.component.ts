import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { productImage } from 'src/app/models/productImage';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[];
  constructor(private cartService:CartService,
    private toastrservice:ToastrService) { }

  ngOnInit(): void {
    this.getcart();
  }
  // JSON.parse(localStorage.getItem('cartItems'));

  getcart(){
   this.cartItems=this.cartService.list();
  }

  removeFromCart(product:Product){
    this.cartService.removeFromCart( {
      productID:product.productID,
      subCategoryId:product.subCategoryId,
      productName:product.productName,
      unitsInStock:product.unitsInStock,
      unitPrice:product.unitPrice,
      description:"",
      brandId:""});
      this.toastrservice.error("Ürün Sepetten Cıkartıldı",product.productName)
  }
}
