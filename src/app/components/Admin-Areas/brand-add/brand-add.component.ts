import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {
  brandAddForm:FormGroup
  constructor(private brandservice:BrandService, 
    private formbuilder:FormBuilder,
    private toasterservice:ToastrService) { }

  ngOnInit(): void {
    this.creatbrandaddform();
  }

  creatbrandaddform(){
    this.brandAddForm=this.formbuilder.group({
      brandName:[""]
    })
  }

  Addbrand(){
    if(this.brandAddForm.valid){
      let brandmodel = Object.assign(this.brandAddForm.value)
      this.brandservice.addBran(brandmodel).subscribe(response =>{
        this.toasterservice.success(response.messages)
        this.ngOnInit();
      })
    }
  }

}
