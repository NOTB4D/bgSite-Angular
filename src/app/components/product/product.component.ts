import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  subTitle:string = "";
  products:Product[]=[];
  constructor(private searchService:SearchService,private productservice:ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.productservice.getProduct().subscribe(response =>{
      this.products=response.data
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

  

}
