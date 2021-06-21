import { productSearch } from './../../models/productSearch';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { productImage } from 'src/app/models/productImage';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { SearchService } from 'src/app/services/search.service';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { CartItem } from 'src/app/models/cartItem';

@Component({
 
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  subTitle:string = "";
  products:Product[]=[];
  productsearch:productSearch[]=[];
  productImage:productImage[]=[];
  cartItems:CartItem[];
  imageBasePath = environment.imageUrl;
  defaultImg="/images/default.jpg"

  constructor(private searchService:SearchService,
    private productservice:ProductService,
    private toastrservice:ToastrService,
    private activatedRoute:ActivatedRoute,
    private cartService:CartService,
    private localstorageservice:LocalStorageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["subcategoryId"]){
        this.getProductBysubcategoryId(params["subcategoryId"])
        }
    })
   
  }

  getProduct(){
    this.productservice.getProduct().subscribe(response =>{
      this.products=response.data
    })
    }


    getProductBysubcategoryId(subCategoryId:number){
    this.productservice.getProductBysubcategoryId(subCategoryId).subscribe(response=>{
      this.productImage=response.data;
      
    })
  }

 getProductBySearch(search:string){
   this.productservice.getProductBySearch(search).subscribe(response =>{
     this.productsearch=response.data;
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
