import { Component, OnInit } from '@angular/core';
import {RoomService} from "../../../../../services/room.service";

@Component({
  selector: 'app-view-room-details-page',
  templateUrl: './view-room-details-page.component.html',
  styleUrls: ['./view-room-details-page.component.scss']
})
export class ViewRoomDetailsPageComponent implements OnInit {

  rooms: any[] = [];

  constructor(private _service : RoomService) { }

  ngOnInit(): void {

    this._service.showRoomDetails().subscribe(response => {
      this.rooms = response.data;
    }, error => {
      console.log(error);
    })

  }

}
