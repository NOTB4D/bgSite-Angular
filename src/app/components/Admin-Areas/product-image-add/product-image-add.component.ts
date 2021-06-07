import { ProductsImage } from './../../../models/productsImage';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';
import { ProductImageService } from 'src/app/services/product-image.service';

@Component({
  selector: 'app-product-image-add',
  templateUrl: './product-image-add.component.html',
  styleUrls: ['./product-image-add.component.css']
})
export class ProductImageAddComponent implements OnInit {
imageAddForm:FormGroup;
products:Product[]=[];
selectedFile : File = null;
  constructor(private productservice:ProductService,
    private formbuilder:FormBuilder,
    private toastrService:ToastrService,
    private productImageService:ProductImageService
    ) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
  this.getproductlist();
  this.creatImageAdd();
  }

  creatImageAdd(){
    this.imageAddForm = this.formbuilder.group({
      productId:["",Validators.required],
      file:[null]
    });
  }

  getproductlist(){
    this.productservice.getProduct().subscribe(response =>{
      this.products=response.data;
    })
  }

  addImage(event:any){
    // console.log(event);
    // const productImage = (event.target as HTMLInputElement).files[0];
    // this.imageAddForm.patchValue({
    //   file:productImage
    // });
    // this.imageAddForm.get('file').updateValueAndValidity();
    this.selectedFile= event.target.files[0];
    console.log(this.selectedFile);
  }

  submitForm(){
    if(this.imageAddForm.valid){
      var formData : any = new FormData();
      formData.append("Image",this.selectedFile,this.selectedFile.name);
      formData.append("productId",this.imageAddForm.get("productId").value);
      this.productImageService.addImage(formData).subscribe(respose=>{
        this.toastrService.success(respose.messages);
      },responseError=>{
        this.toastrService.error(responseError.error.messages);
      })
    }else{
      this.toastrService.error("Form Bilgileriniz Eksik");
    }
      
  }
}
