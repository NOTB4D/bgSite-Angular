import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categoryupdate',
  templateUrl: './categoryupdate.component.html',
  styleUrls: ['./categoryupdate.component.css']
})
export class CategoryupdateComponent implements OnInit {
  category:category
  UpdateForm:FormGroup

  constructor(private categoryService:CategoryService,
    private activatedRoute:ActivatedRoute,
    private toastrservice:ToastrService,
    private formbuilder:FormBuilder ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params["categoryId"]){
        this.getcategoryById(params["categoryId"])
      }
    })

    this.categoryupdateForm();

  }


  categoryupdateForm(){
    this.UpdateForm=this.formbuilder.group({
      categoryName:[""],
      categoryId:[""]
    })
  }

 updateCategory(){
   if(this.UpdateForm.valid){
     let categoryModel = Object.assign({}, this.UpdateForm.value);
     this.categoryService.updateCategory(categoryModel).subscribe(response =>{
       this.toastrservice.success(response.message,"Güncelleme işlemi başarılı");
     })
   }
 }

getcategoryById(categoryId:number){
  this.categoryService.getCategoryById(categoryId).subscribe(response =>{
    this.category=response.data;
  })
}

}
