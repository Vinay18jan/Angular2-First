import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ProductListComponent} from './Products/product-list.component'
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ProductListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
