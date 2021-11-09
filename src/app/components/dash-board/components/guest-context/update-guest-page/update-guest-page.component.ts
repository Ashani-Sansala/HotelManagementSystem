import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GuestService} from "../../../../../services/guest.service";
import GuestDTO from "../../../../../dto/GuestDTO";

@Component({
  selector: 'app-update-guest-page',
  templateUrl: './update-guest-page.component.html',
  styleUrls: ['./update-guest-page.component.scss']
})
export class UpdateGuestPageComponent implements OnInit {

  guestForm = new FormGroup({
    id: new FormControl('', [
      Validators.required, Validators.minLength(4), Validators.maxLength(10)
    ]),
    name: new FormControl('', [
      Validators.required, Validators.minLength(3), Validators.maxLength(50)
    ]),
    contact: new FormControl('', [
      Validators.required, Validators.minLength(10), Validators.maxLength(20)
    ]),
    email: new FormControl('', [
      Validators.required
    ]),
    country: new FormControl('', [
      Validators.required, Validators.minLength(3), Validators.maxLength(15)
    ]),
    gender: new FormControl('', [
      Validators.required
    ]),
    address: new FormControl('', [
      Validators.required, Validators.minLength(5), Validators.maxLength(20)
    ]),
  })

  constructor(private _guestService: GuestService) {
  }

  ngOnInit(): void {
  }

  uploadData(){
    const dto = new GuestDTO(
      this.guestForm.get('id')?.value,
      this.guestForm.get('name')?.value,
      this.guestForm.get('contact')?.value,
      this.guestForm.get('email')?.value,
      this.guestForm.get('country')?.value,
      this.guestForm.get('gender')?.value,
      this.guestForm.get('address')?.value,
    );
    this._guestService.updateGuest(dto).subscribe(response => {
      alert('Updated Successfully..');
      this.guestForm.reset();
    }, error => {
      console.log(error)
    })
  }
}
