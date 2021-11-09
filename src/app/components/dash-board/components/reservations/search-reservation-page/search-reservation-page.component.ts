import { Component, OnInit } from '@angular/core';
import {ReservationService} from "../../../../../services/reservation.service";

@Component({
  selector: 'app-search-reservation-page',
  templateUrl: './search-reservation-page.component.html',
  styleUrls: ['./search-reservation-page.component.scss']
})
export class SearchReservationPageComponent implements OnInit {

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
  }

  dataSet : any;

  search(resId: string) {
    this.reservationService.searchReservation(resId).subscribe(response => {
      this.dataSet = response.data;
    }, error => {
      console.log(error);
    })
  }
}
