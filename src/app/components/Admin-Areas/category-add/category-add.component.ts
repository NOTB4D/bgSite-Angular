import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  categoryAddForm:FormGroup
  constructor(private categoryService:CategoryService, 
    private formBuilder:FormBuilder,
    private taostrservice:ToastrService) { }

  ngOnInit(): void {
    this.creatcategoryaddform();
  }
  creatcategoryaddform(){
    this.categoryAddForm = this.formBuilder.group({
      categoryName:[""]
    })
  }

  AddCategory(){
    if(this.categoryAddForm.valid){
      let categoryModel = Object.assign(this.categoryAddForm.value);
      this.categoryService.AddCategory(categoryModel).subscribe( response =>{
        this.taostrservice.success(response.message,"Ekleme işlemi başarılı");
        this.ngOnInit();
      })
    }
  }
  


}
