import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
brands:brand[]=[];
brand:brand;
  constructor(private brandservice:BrandService,
    private toasterservice:ToastrService) { }

  ngOnInit(): void {
    this.getbrand();
  }



getbrand(){
  this.brandservice.getBrand().subscribe(response =>{
    this.brands = response.data;
  })
}
getBrandId(id:number){
  this.brandservice.getBrandById(id).subscribe(response =>{
    this.brand=response.data;
  })
}
deleteBrand(id:number){
  this.brandservice.deleteBrand(id).subscribe(response =>{
    this.toasterservice.success(response.message,"Silme İşlemi Başarılı");
    this.ngOnInit();
  })
}

}
