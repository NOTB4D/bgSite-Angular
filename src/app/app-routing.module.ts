import { LoginGuard } from './guard/login.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/Admin-Areas/admin/admin.component';
import { BrandAddComponent } from './components/Admin-Areas/brand-add/brand-add.component';
import { BrandListComponent } from './components/Admin-Areas/brand-list/brand-list.component';
import { CategoryAddComponent } from './components/Admin-Areas/category-add/category-add.component';
import { CategorylistComponent } from './components/Admin-Areas/categorylist/categorylist.component';
import { CategoryupdateComponent } from './components/Admin-Areas/categoryupdate/categoryupdate.component';
import { ProductAddComponent } from './components/Admin-Areas/product-add/product-add.component';
import { ProductImageAddComponent } from './components/Admin-Areas/product-image-add/product-image-add.component';
import { SubcategoryAddComponent } from './components/Admin-Areas/subcategory-add/subcategory-add.component';
import { CartbagComponent } from './components/cartbag/cartbag.component';
import { FirstComponent } from './components/first/first.component';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { LoginComponent } from './components/login/login.component';
import { PayComponent } from './components/pay/pay.component';
import { ProductComponent } from './components/product/product.component';
import { ProductdetailComponent } from './components/product/productDetail/productdetail/productdetail.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminGuard } from './guard/admin.guard';


const routes: Routes = [
  {path:"",pathMatch:"full",component:FirstComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"Cart",component:CartbagComponent},
  {path:"Pay",component:PayComponent,canActivate:[LoginGuard]},
  
//AdminBase
  {path:"admin", component:AdminComponent,canActivate:[AdminGuard]},
  //Add
  {path:"admin/brand-add", component:BrandAddComponent,canActivate:[AdminGuard]},
  {path:"admin/category-add",component:CategoryAddComponent,canActivate:[AdminGuard]},
  {path:"admin/product-add",component:ProductAddComponent,canActivate:[AdminGuard]},
  {path:"admin/subcategory-add",component:SubcategoryAddComponent,canActivate:[AdminGuard]},
  {path:"admin/product-image-add",component:ProductImageAddComponent},
  
  //Update
  {path:"admin/category-update/:categoryId",component:CategoryupdateComponent,canActivate:[AdminGuard]},
  {path:"admin/category-List",component:CategorylistComponent,canActivate:[AdminGuard]},
  {path:"admin/brand-List",component:BrandListComponent,canActivate:[AdminGuard]},
//HomePage
  {path:"product/:subcategoryId",component:ProductComponent},
  {path:"iletisim", component:IletisimComponent},
  {path:":categoryId",component:FirstComponent},
  {path:"productdetails/:productID",component:ProductdetailComponent},
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
