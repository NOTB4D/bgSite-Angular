import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-subcategory-add',
  templateUrl: './subcategory-add.component.html',
  styleUrls: ['./subcategory-add.component.css']
})
export class SubcategoryAddComponent implements OnInit {
  categories:category[]=[];
  subcategoryAddForm:FormGroup;
  constructor(private categoryService:CategoryService, private formbuilder:FormBuilder,private subCategoryService:SubCategoryService) { }

  ngOnInit(): void {
    this.getCategory();
    this.creatsubcategoryaddform();

  }

  creatsubcategoryaddform(){
    this.subcategoryAddForm = this.formbuilder.group({
      subCategoryName:[""],
      categoryId:[""]
    })
  }

  getCategory(){
    this.categoryService.getCategory().subscribe(response =>{
      this.categories=response.data
    })
    }

    addSubcategory(){
      if(this.subcategoryAddForm.valid){
        let subCategoryModel = Object.assign(this.subcategoryAddForm.value);
        this.subCategoryService.addSubcategory(subCategoryModel).subscribe(Response =>{
          console.log(Response);
        } )
      }
    }


}
