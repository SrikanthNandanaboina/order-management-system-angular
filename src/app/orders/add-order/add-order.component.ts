import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {  

  constructor(public activeModal: NgbActiveModal) { }

  @Input() id: number;
  @Input() Orders: any;
  @Input() OrderData: any;

  form: FormGroup;

  ngOnInit() {
    this.createForm()
  }

  createForm(){
    let order_id = this.OrderData != '' ? this.OrderData.id : '';
    let due_date = this.OrderData != '' ? this.OrderData.due_date : '';
    let customer_phone = this.OrderData != '' ? this.OrderData.customer_phone : '';
    let customer_name = this.OrderData != '' ? this.OrderData.customer_name : '';
    let customer_address = this.OrderData != '' ? this.OrderData.customer_address : '';
    let order_total = this.OrderData != '' ? this.OrderData.order_total : '';
    this.form = new FormGroup({
      id: new FormControl(order_id, Validators.required),
      due_date: new FormControl(due_date, Validators.required),
      customer_name: new FormControl(customer_name, Validators.required),
      customer_address: new FormControl(customer_address, Validators.required),
      customer_phone: new FormControl(customer_phone, [Validators.required, Validators.maxLength(10), Validators.pattern('[6-9]\\d{9}')]),
      order_total: new FormControl(order_total, Validators.required),    
    })
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  submitForm(){
    let Orders = this.Orders.map(ele=>ele.id);
    this.activeModal.close(this.form.value);    
  }
}
