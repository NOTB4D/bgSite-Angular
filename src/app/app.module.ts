import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
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
    SubcategoryAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
