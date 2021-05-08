import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/Admin-Areas/admin/admin.component';
import { BrandAddComponent } from './components/Admin-Areas/brand-add/brand-add.component';
import { FirstComponent } from './components/first/first.component';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { ProductComponent } from './components/product/product.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:FirstComponent},
  {path:"product",component:ProductComponent},
  {path:"admin", component:AdminComponent},
  {path:"iletisim", component:IletisimComponent},
  {path:":categoryId",component:FirstComponent},
  {path:"admin/brand-add", component:BrandAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
