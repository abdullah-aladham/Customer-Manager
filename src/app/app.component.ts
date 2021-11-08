import { Component, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CustomerAddComponent } from './customer-add/customer-add.component';
//import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import Customers from './database/Customers.json';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Customer-Manager1';
  public customerList:{name:string, City:string,Country:string}[] = Customers ; 

constructor(private router:Router,private dialogRef:MatDialog){}
 editCustomer(){
this.dialogRef.open(EditCustomerComponent);
} 
addCustomer(){
  this.dialogRef.open(CustomerAddComponent);
  } 
}
