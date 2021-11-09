import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RoomService} from "../../../../../services/room.service";

@Component({
  selector: 'app-remove-room-page',
  templateUrl: './remove-room-page.component.html',
  styleUrls: ['./remove-room-page.component.scss']
})
export class RemoveRoomPageComponent implements OnInit {

  roomForm = new FormGroup({

    roomId: new FormControl('', [
      Validators.required, Validators.minLength(4), Validators.maxLength(10)
    ])

  });

  constructor(private _roomService: RoomService) { }

  ngOnInit(): void {
  }

  uploadData(){

    this._roomService.removeRoom(this.roomForm.get('roomId')?.value,).subscribe(response => {
      alert('Removed Successfully..');
      this.roomForm.reset();
    }, error => {
      console.log(error)
    })
  }

}
