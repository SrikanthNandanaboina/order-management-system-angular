import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddOrderComponent } from './add-order/add-order.component';


const routes: Routes = [
  { path: 'all-orders', component: AllOrdersComponent }
]

@NgModule({
  declarations: [AllOrdersComponent, AddOrderComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ AllOrdersComponent ],
  entryComponents: [ AddOrderComponent ]
})
export class OrdersModule { }
