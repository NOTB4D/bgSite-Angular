import { CartService } from './../../../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { productSearch } from 'src/app/models/productSearch';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { CartSummaryComponent } from '../../cart-summary/cart-summary.component';
import { productImage } from 'src/app/models/productImage';

@Component({
  providers:[CartSummaryComponent],
  selector: 'app-productsearch',
  templateUrl: './productsearch.component.html',
  styleUrls: ['./productsearch.component.css']
})
export class ProductsearchComponent implements OnInit {

  productsearch:productSearch[]=[];
  imageBasePath = environment.imageUrl;
  defaultImg="/images/default.jpg"
  dataLoaded = false;

  constructor(private productservice:ProductService,
    private toastrservice:ToastrService,
    private activatedRoute:ActivatedRoute,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params["search"]){
        this.getProductBySearch(params["search"])
      }
    })
  }

  getProductBySearch(search:string){
    this.productservice.getProductBySearch(search).subscribe(response =>{
      this.productsearch=response.data;
      if(this.productsearch.length>0){
          this.dataLoaded==true;
      }
    })
  }

  addtoCart(product:productImage){
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
    description:"fdf",
    brandId:"1"
    })
   
  }
}
