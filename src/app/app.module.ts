import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule} from'@angular/platform-browser/animations';
import {MatDialogModule}from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
//import { AddCustomerDirective } from './add-customer.directive';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import {SimpleModalModule } from 'ngx-simple-modal';


@NgModule({
  declarations: [
    AppComponent,
  //  CustomerEditComponent,
    EditCustomerComponent,
    //AddCustomerDirective,
    CustomerAddComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    SimpleModalModule,
    SimpleModalModule.forRoot({container:document.body})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
