import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productdetails } from 'src/app/models/productdetails';

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
    private activatedRoute:ActivatedRoute) { }

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
      console.log
    });
  }



}
