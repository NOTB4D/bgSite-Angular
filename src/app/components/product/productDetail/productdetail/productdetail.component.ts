import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { productdetails } from 'src/app/models/productdetails';
import { productImage } from 'src/app/models/productImage';
import { CartService } from 'src/app/services/cart.service';

import { ProductService } from 'src/app/services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

productdetails:productdetails[]=[];
product:productdetails;
Images:string[]=[];
imageBasePath = environment.imageUrl;


  constructor(private productsevice:ProductService,
    private toastrservice:ToastrService,
    private activatedRoute:ActivatedRoute,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["productID"]){
        this.getProductByProductId(params["productID"])  
      }
    })
  }

  getProductByProductId(productID:number){
    this.productsevice.getProductByProductId(productID).subscribe(response =>{
      this.productdetails = response.data;
      this.product = response.data[0];
      this.Images = this.product.productImages
      
    });
  }

  
  addtoCart(product:productdetails){
    if(product.unitsInStock===0){
      this.toastrservice.error("Hata","Ürün Stokta Yok")
    }
    this.toastrservice.success("Sepete eklendi",product.productName)
    this.cartService.addtoCart({
      productID:product.productId,
    subCategoryId:product.subCategoryId,
    productName:product.productName,
    unitsInStock:product.unitsInStock,
    unitPrice:product.unitPrice,
    description:"",
    brandId:""
    })
  }


}
