import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CatagoriesComponent } from './header/catagories/catagories.component';
import { SortingComponent } from './header/sorting/sorting.component';
import { ProductDisplayComponent } from './header/product-display/product-display.component';

import { FetchCategoryService } from './header/catagories/FetchCategory.service';
import { CategorySelectService } from './header/services/CategorySelect.service';
import { FetchCategoryDataService } from './header/product-display/fetchCategoryData.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatagoriesComponent,
    SortingComponent,
    ProductDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [FetchCategoryService, FetchCategoryDataService, CategorySelectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
