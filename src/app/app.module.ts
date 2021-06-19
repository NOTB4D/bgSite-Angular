import { productSearch } from './models/productSearch';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { NaviComponent } from './components/navi/navi.component';
import { FirstComponent } from './components/first/first.component';
import { SearchService } from './services/search.service';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/Admin-Areas/admin/admin.component';
import { IletisimComponent } from './components/iletisim/iletisim.component';
import { SidebarComponent } from './components/Admin-Areas/sidebar/sidebar.component';
import { BrandAddComponent } from './components/Admin-Areas/brand-add/brand-add.component';
import { CategoryAddComponent } from './components/Admin-Areas/category-add/category-add.component';
import { ProductAddComponent } from './components/Admin-Areas/product-add/product-add.component';
import { SubcategoryAddComponent } from './components/Admin-Areas/subcategory-add/subcategory-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule} from 'ngx-toastr';
import { CategoryupdateComponent } from './components/Admin-Areas/categoryupdate/categoryupdate.component';
import { CategorylistComponent } from './components/Admin-Areas/categorylist/categorylist.component';
import { BrandListComponent } from './components/Admin-Areas/brand-list/brand-list.component';
import { ProductdetailComponent } from './components/product/productDetail/productdetail/productdetail.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';
import { CartbagComponent } from './components/cartbag/cartbag.component';
import { PayComponent } from './components/pay/pay.component';
import { ProductImageAddComponent } from './components/Admin-Areas/product-image-add/product-image-add.component';
import { ProductsearchComponent } from './components/product/productsearch/productsearch.component';
import { ProfilComponent } from './components/profil/profil.component';



@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    NaviComponent,
    FirstComponent,
    CarouselComponent,
    FooterComponent,
    AdminComponent,
    IletisimComponent,
    SidebarComponent,
    BrandAddComponent,
    CategoryAddComponent,
    ProductAddComponent,
    SubcategoryAddComponent,
    CategoryupdateComponent,
    CategorylistComponent,
    BrandListComponent,
    ProductdetailComponent,
    CartSummaryComponent,
    LoginComponent,
    RegisterComponent,
    CartbagComponent,
    PayComponent,
    ProductImageAddComponent,
    ProductsearchComponent,
    ProfilComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass : "toast-bottom-right"
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true},
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
