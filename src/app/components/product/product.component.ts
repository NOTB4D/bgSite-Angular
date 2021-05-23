import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';

import { productImage } from 'src/app/models/productImage';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { SearchService } from 'src/app/services/search.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  subTitle:string = "";
  products:Product[]=[];
  productImage:productImage[]=[];
  imageBasePath = environment.imageUrl;
  defaultImg="/images/default.jpg"

  constructor(private searchService:SearchService,
    private productservice:ProductService,
    private toastrservice:ToastrService,
    private activatedRoute:ActivatedRoute,
    private cartService:CartService) { }

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
      console.log(response.data)
    })
  }

  get filterText():string{
    return this.searchService.filterData;
  }

  set filterText(value: string){
    this.searchService.filterData = value;
  }
  get searchResultText(){
    let filterData = this.searchService.filterData;
    return (filterData.length > 0)?"Search results for \"" + filterData + "\"":this.subTitle;
  }

  addtoCart(product:productImage){
    if(product.unitsInStock===0){
      this.toastrservice.error("Hata","Ürün Stokta Yok")
    }
    this.toastrservice.success("Sepete eklendi",product.productName)
    this.cartService.addtoCart(product)
  }

  
  

}
