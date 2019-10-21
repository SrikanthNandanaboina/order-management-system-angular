import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { AddOrderComponent } from '../add-order/add-order.component';
import { ToastrService } from 'ngx-toastr';

const Orders: any = []
@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  private CurrentOrders: any;
  constructor(config: NgbModalConfig, private modalService: NgbModal, private toastr: ToastrService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void{
      this.CurrentOrders = Orders
  }

  deleteOrder(id){
    if(confirm("Are you sure want to delete?")){
      this.CurrentOrders.pop(id);
      this.toastr.success('Deleted Successfully');
    }
  }

  openFormModal() {
    const modalRef = this.modalService.open(AddOrderComponent);
    modalRef.componentInstance.id = '';
    modalRef.componentInstance.Orders = this.CurrentOrders;
    modalRef.componentInstance.OrderData = '';
    modalRef.result.then((result) => {
        this.CurrentOrders.push(result);
        this.toastr.success('Added Successfully');
    }).catch((error) => {
        this.toastr.error('Something Went Wrong');
    });
  }

  editFormModal(id){
    const modalRef = this.modalService.open(AddOrderComponent);
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.Orders = this.CurrentOrders;
    modalRef.componentInstance.OrderData = this.CurrentOrders[id];
    modalRef.result.then((result) => {
        this.CurrentOrders[id] = result;
        this.toastr.success('Updated Successfully');
    }).catch((error) => {
      this.toastr.error('Something Went Wrong');
    });
  }
}
