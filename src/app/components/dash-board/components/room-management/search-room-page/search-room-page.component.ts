import { Component, OnInit } from '@angular/core';
import {RoomService} from "../../../../../services/room.service";

@Component({
  selector: 'app-search-room-page',
  templateUrl: './search-room-page.component.html',
  styleUrls: ['./search-room-page.component.scss']
})
export class SearchRoomPageComponent implements OnInit {

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {
  }

  dataSet : any;

  search(roomId: string) {
    this.roomService.searchRoom(roomId).subscribe(response => {
      this.dataSet = response.data;
    }, error => {
      console.log(error);
    })
  }

}
