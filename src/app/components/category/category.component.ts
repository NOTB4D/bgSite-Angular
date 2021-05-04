import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/models/category';

import { CategoryService } from 'src/app/services/category.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
categories:category[]=[];
 currentCategory: category={categoryName:"", categoryId:0};

  constructor(private categoryService:CategoryService, private subcategoryservice:SubCategoryService) { }

  ngOnInit(): void {
    this.getCategory();
    

  }

getCategory(){
this.categoryService.getCategory().subscribe(response =>{
  this.categories=response.data
})
}

setCurrentCategory(category:category){
  this.currentCategory = category;
}

}
