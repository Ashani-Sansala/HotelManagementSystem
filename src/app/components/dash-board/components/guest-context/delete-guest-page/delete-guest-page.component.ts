import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GuestService} from "../../../../../services/guest.service";

@Component({
  selector: 'app-delete-guest-page',
  templateUrl: './delete-guest-page.component.html',
  styleUrls: ['./delete-guest-page.component.scss']
})
export class DeleteGuestPageComponent implements OnInit {

  guestForm = new FormGroup({
    id: new FormControl('', [
      Validators.required, Validators.minLength(4), Validators.maxLength(10)
    ])
  });

  constructor(private _guestService: GuestService) {
  }

  ngOnInit(): void {
  }

  uploadData(){

    this._guestService.deleteGuest(this.guestForm.get('id')?.value,).subscribe(response => {
      alert('Deleted Successfully..');
      this.guestForm.reset();
    }, error => {
      console.log(error)
    })
  }

}
