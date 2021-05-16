import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
  categories:category[]=[];
  constructor(private categoryService:CategoryService,
    private taostrservice:ToastrService) { }

  ngOnInit(): void {
    this.getcategory();
  }



  getcategory(){
    this.categoryService.getCategory().subscribe(response =>{
      this.categories = response.data;
    })
  }

  deleteCategory(id:number){
    this.categoryService.deleteCategory(id).subscribe(response =>{
      this.taostrservice.success(response.message,"Silme işlemi başarılı");
      this.ngOnInit();
    })
    
   
  }
}
