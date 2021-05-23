import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { brand } from 'src/app/models/brand';
import { category } from 'src/app/models/category';
import { subCategory } from 'src/app/models/subCategory';
import { BrandService } from 'src/app/services/brand.service';
import { ProductService } from 'src/app/services/product.service';

import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  subcategories : subCategory[]=[];
  brands: brand[]=[];
  productAddForm:FormGroup;

  constructor( private subcategoryservice:SubCategoryService,private formbuilder:FormBuilder, private brandservice:BrandService,
    private productservice:ProductService, private toasterservice:ToastrService) { }

  ngOnInit(): void {
    this.creatproductaddform();
    this.getSubCategori();
    this.getCategory()
  }


  creatproductaddform(){
    this.productAddForm=this.formbuilder.group({
      productName:[""],
      unitsInStock:[""],
      unitPrice:[""],
      description:[""],
      brandId:[""],
      subCategoryId:[""]
    })
  }

  getSubCategori(){
    this.subcategoryservice.getSubCategory().subscribe(response =>{
      this.subcategories = response.data;
      
    })
  }

  getCategory(){
    this.brandservice.getBrand().subscribe(response =>{
      this.brands = response.data;
      
    })
  }

addProduct(){
  if(this.productAddForm.valid){
    let productmodel = Object.assign({},this.productAddForm.value);
    this.productservice.addProduct(productmodel).subscribe(response =>{
      this.toasterservice.success(response.messages,"İşleminiz Başarılı");
    },responseError=>{
      if(responseError.error.Errors.length>0){
        for (let i = 0; i <responseError.error.Errors.length; i++) {
          this.toasterservice.error(responseError.error.Errors[i].ErrorMessage
            ,"Doğrulama hatası")
        }       
      } 
    })
    
  }else{
    this.toasterservice.error("Formunuz eksik","Dikkat")
  }
  
}

}
