import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RoomService} from "../../../../../services/room.service";
import RoomDTO from "../../../../../dto/RoomDTO";

@Component({
  selector: 'app-add-room-page',
  templateUrl: './add-room-page.component.html',
  styleUrls: ['./add-room-page.component.scss']
})
export class AddRoomPageComponent implements OnInit {

  roomForm = new FormGroup({

    roomId: new FormControl('', [
      Validators.required, Validators.minLength(4), Validators.maxLength(10)
    ]),
    type: new FormControl('', [
      Validators.required
    ]),
    floor: new FormControl('', [
      Validators.required, Validators.minLength(1), Validators.maxLength(20)
    ]),
    roomStatus: new FormControl('', [
      Validators.required
    ]),
    amount: new FormControl('', [
      Validators.required, Validators.minLength(3), Validators.maxLength(10)
    ]),
    cleaningStatus: new FormControl('', [
      Validators.required
    ]),
  });

  constructor(private _roomService: RoomService) { }

  ngOnInit(): void {
  }

  uploadData(){
    const dto = new RoomDTO(
      this.roomForm.get('roomId')?.value,
      this.roomForm.get('type')?.value,
      this.roomForm.get('floor')?.value,
      this.roomForm.get('roomStatus')?.value,
      this.roomForm.get('amount')?.value,
      this.roomForm.get('cleaningStatus')?.value,
    );
    this._roomService.addRoom(dto).subscribe(response => {
      alert('Added Successfully');
      this.roomForm.reset();
    }, error => {
      console.log(error)
    })
  }
}
