import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReservationService} from "../../../../../services/reservation.service";
import {PaymentService} from "../../../../../services/payment.service";
import PaymentDTO from "../../../../../dto/PaymentDTO";

@Component({
  selector: 'app-new-payment-page',
  templateUrl: './new-payment-page.component.html',
  styleUrls: ['./new-payment-page.component.scss']
})
export class NewPaymentPageComponent implements OnInit {

  paymentForm = new FormGroup({
    payId: new FormControl('', [
      Validators.required, Validators.minLength(4), Validators.maxLength(10)
    ]),
    resId: new FormControl('', [
      Validators.required
    ]),
    roomCharge: new FormControl('', [
      Validators.required
    ]),
    other: new FormControl('', [
      Validators.required
    ]),
    total: new FormControl('', [
      Validators.required
    ]),
    method: new FormControl('', [
      Validators.required
    ]),
    date: new FormControl('', [
      Validators.required
    ]),
    received: new FormControl('', [
      Validators.required
    ]),
  });


  constructor(private _paymentService: PaymentService, private _reservationService: ReservationService) { }

  ngOnInit(): void {
    this.loadAllReservations();
  }

  allReservations: any[] = [];

  private loadAllReservations() {
    this._reservationService.getAllReservations().subscribe(response => {
      this.allReservations = response.data;
    }, error => {
      console.log(error)
    })
  }


  uploadData() {
    const dto = new PaymentDTO(
      this.paymentForm.get('payId')?.value,
      this.paymentForm.get('resId')?.value,
      this.paymentForm.get('roomCharge')?.value,
      this.paymentForm.get('other')?.value,
      this.paymentForm.get('total')?.value,
      this.paymentForm.get('method')?.value,
      this.paymentForm.get('date')?.value,
      this.paymentForm.get('received')?.value,
    );
    this._paymentService.newPayment(dto).subscribe(response => {
      alert('Payment Completed Successfully');
      this.paymentForm.reset();
    }, error => {
      console.log(error)
    })
  }

}
