import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/models/category';
import { subCategory } from 'src/app/models/subCategory';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';
import { element } from 'protractor';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
categories:category[]=[];
subcategories : subCategory[]=[];
dataLoaded = false;


  constructor(private categoryService:CategoryService,private activatedRoute:ActivatedRoute, private subcategoryservice:SubCategoryService) { }

  ngOnInit(): void {
   this.getCategory();
  
  }

getCategory(){
this.categoryService.getCategory().subscribe(response =>{
  this.categories=response.data
})
}

getSubCategoryById(categoryId:number){
  this.subcategoryservice.getSubCategoryById(categoryId).subscribe(response =>{
    this.subcategories = response.data
    this.dataLoaded = true;
    console.log(this.subcategories)
  })
}






}



