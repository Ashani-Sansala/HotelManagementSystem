import { Component, OnInit } from '@angular/core';
import {GuestService} from "../../../../../services/guest.service";

@Component({
  selector: 'app-search-guest-page',
  templateUrl: './search-guest-page.component.html',
  styleUrls: ['./search-guest-page.component.scss']
})
export class SearchGuestPageComponent implements OnInit {

  constructor(private guestService: GuestService) { }

  ngOnInit(): void {
  }

  dataSet : any;

  search(id: string) {
    this.guestService.searchGuest(id).subscribe(response => {
      this.dataSet = response.data;
    }, error => {
      console.log(error);
    })
  }
}
