import {Component, OnInit, ViewChild} from '@angular/core';
import {GuestService} from "../../../../../services/guest.service";

@Component({
  selector: 'app-all-guests-page',
  templateUrl: './all-guests-page.component.html',
  styleUrls: ['./all-guests-page.component.scss'],
})


export class AllGuestsPageComponent implements OnInit {

  guests:any[] = [];

  constructor(private _service : GuestService) { }

  ngOnInit(): void {

    this._service.getAllGuests().subscribe(response => {
      this.guests = response.data;
    }, error => {
      console.log(error);
    })
  }

}
