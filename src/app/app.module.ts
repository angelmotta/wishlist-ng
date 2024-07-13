import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishComponent } from './add-wish/add-wish.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishElementComponent } from './wish-element/wish-element.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    WishListComponent,
    AddWishComponent,
    WishFilterComponent,
    WishElementComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
