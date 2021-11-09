import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GuestService} from "../../../../../services/guest.service";
import {ReservationService} from "../../../../../services/reservation.service";
import GuestDTO from "../../../../../dto/GuestDTO";
import ReservationDTO from "../../../../../dto/ReservationDTO";

@Component({
  selector: 'app-update-reservation-page',
  templateUrl: './update-reservation-page.component.html',
  styleUrls: ['./update-reservation-page.component.scss']
})
export class UpdateReservationPageComponent implements OnInit {

  reservationForm = new FormGroup({
    resId: new FormControl('', [
      Validators.required, Validators.minLength(4), Validators.maxLength(10)
    ]),
    guestId: new FormControl('', [
      Validators.required
    ]),
    rooms: new FormControl('', [
      Validators.required, Validators.minLength(1), Validators.maxLength(200)
    ]),
    roomType: new FormControl('', [
      Validators.required
    ]),
    adults: new FormControl('', [
      Validators.required, Validators.minLength(0), Validators.maxLength(300)
    ]),
    children: new FormControl('', [
      Validators.required, Validators.minLength(0), Validators.maxLength(200)
    ]),
    days: new FormControl('', [
      Validators.required, Validators.minLength(1)
    ]),
    checkIn: new FormControl('', [
      Validators.required
    ]),
    checkOut: new FormControl('', [
      Validators.required
    ]),
  })

  constructor(private _guestService: GuestService, private _reservationService: ReservationService) { }

  ngOnInit(): void {
    this.loadAllGuests();
  }

  allGuests: any[]=[];

  private loadAllGuests() {
    this._guestService.getAllGuests().subscribe(response => {
      this.allGuests = response.data;
    }, error => {
      console.log(error)
    })
  }

  uploadData(){
    const dto = new ReservationDTO(
      this.reservationForm.get('resId')?.value,
      this.reservationForm.get('guestId')?.value,
      this.reservationForm.get('rooms')?.value,
      this.reservationForm.get('roomType')?.value,
      this.reservationForm.get('adults')?.value,
      this.reservationForm.get('children')?.value,
      this.reservationForm.get('days')?.value,
      this.reservationForm.get('checkIn')?.value,
      this.reservationForm.get('checkOut')?.value,
    );
    this._reservationService.updateReservation(dto).subscribe(response => {
      alert('Successfully Updated..');
      this.reservationForm.reset();
    }, error => {
      console.log(error)
    })
  }

}
