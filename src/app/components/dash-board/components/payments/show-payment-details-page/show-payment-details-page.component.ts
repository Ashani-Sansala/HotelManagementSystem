import { Component, OnInit } from '@angular/core';
import {PaymentService} from "../../../../../services/payment.service";

@Component({
  selector: 'app-show-payment-details-page',
  templateUrl: './show-payment-details-page.component.html',
  styleUrls: ['./show-payment-details-page.component.scss']
})
export class ShowPaymentDetailsPageComponent implements OnInit {

  payments:any[] = [];

  constructor(private _service : PaymentService) { }

  ngOnInit(): void {

    this._service.getAllPayments().subscribe(response => {
      this.payments = response.data;
    }, error => {
      console.log(error);
    })
  }

}
