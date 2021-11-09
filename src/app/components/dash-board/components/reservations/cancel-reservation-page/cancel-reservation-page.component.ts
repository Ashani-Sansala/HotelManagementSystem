import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReservationService} from "../../../../../services/reservation.service";

@Component({
  selector: 'app-cancel-reservation-page',
  templateUrl: './cancel-reservation-page.component.html',
  styleUrls: ['./cancel-reservation-page.component.scss']
})
export class CancelReservationPageComponent implements OnInit {

  reservationForm = new FormGroup({
    resId: new FormControl('', [
      Validators.required, Validators.minLength(4), Validators.maxLength(10)
    ])
  });

  constructor(private _reservationService: ReservationService) { }

  ngOnInit(): void {
  }

  uploadData(){

    this._reservationService.cancelReservation(this.reservationForm.get('resId')?.value,).subscribe(response => {
      alert('Canceled Successfully ..');
      this.reservationForm.reset();
    }, error => {
      console.log(error)
    })
  }
}
