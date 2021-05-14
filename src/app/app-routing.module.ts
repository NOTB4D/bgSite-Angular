import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/Admin-Areas/admin/admin.component';
import { BrandAddComponent } from './components/Admin-Areas/brand-add/brand-add.component';
import { CategoryAddComponent } from './components/Admin-Areas/category-add/category-add.component';
import { CategoryupdateComponent } from './components/Admin-Areas/categoryupdate/categoryupdate.component';
import { ProductAddComponent } from './components/Admin-Areas/product-add/product-add.component';
import { SubcategoryAddComponent } from './components/Admin-Areas/subcategory-add/subcategory-add.component';
import { FirstComponent } from './components/first/first.component';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { ProductComponent } from './components/product/product.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:FirstComponent},

//AdminBase
  {path:"admin", component:AdminComponent},
  //Add
  {path:"admin/brand-add", component:BrandAddComponent},
  {path:"admin/category-add",component:CategoryAddComponent},
  {path:"admin/product-add",component:ProductAddComponent},
  {path:"admin/subcategory-add",component:SubcategoryAddComponent},
  //Update
  {path:"admin/product-update",component:CategoryupdateComponent},
//HomePage
  {path:"product",component:ProductComponent},
  {path:"iletisim", component:IletisimComponent},
  {path:":categoryId",component:FirstComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
