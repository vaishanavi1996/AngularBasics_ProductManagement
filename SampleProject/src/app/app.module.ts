import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from '../app/products/product-list.component';
import { pipe } from 'rxjs';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductsDetailsComponent } from './products/products-details.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    WelcomeComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductsDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    {path: 'product' , component: ProductListComponent},
    {path: 'product/:id' , component: ProductsDetailsComponent},
    {path: 'welcome' , component: WelcomeComponent},
    {path: '' , redirectTo: 'welcome', pathMatch: 'full'},
    {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
