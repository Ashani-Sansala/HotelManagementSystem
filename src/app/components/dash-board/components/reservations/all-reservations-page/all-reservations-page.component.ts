import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../../../../../services/reservation.service";

@Component({
  selector: 'app-all-reservations-page',
  templateUrl: './all-reservations-page.component.html',
  styleUrls: ['./all-reservations-page.component.scss']
})
export class AllReservationsPageComponent implements OnInit {

  reservations:any[] = [];

  constructor(private _service : ReservationService) { }

  ngOnInit(): void {

    this._service.getAllReservations().subscribe(response => {
      this.reservations = response.data;
    }, error => {
      console.log(error);
    })

  }

}
