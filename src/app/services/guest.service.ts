import { Injectable } from '@angular/core';
import GuestDTO from "../dto/GuestDTO";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http: HttpClient) { }

  public registerGuest(dto: GuestDTO): Observable<any>{
    return this.http.post('http://localhost:3002/api/v1/guestRoute/registerGuest', {
      id: dto.id,
      name: dto.name,
      contact: dto.contact,
      email: dto.email,
      country: dto.country,
      gender: dto.gender,
      address: dto.address
    })
  }

  public updateGuest(dto: GuestDTO): Observable<any>{
    return this.http.put('http://localhost:3002/api/v1/guestRoute/updateGuest', {
      id: dto.id,
      name: dto.name,
      contact: dto.contact,
      email: dto.email,
      country: dto.country,
      gender: dto.gender,
      address: dto.address
    })
  }

  public deleteGuest(id: string): Observable<any>{
    return this.http.delete('http://localhost:3002/api/v1/guestRoute/deleteGuest', {
      headers:{id}
    })
  }

  public searchGuest(id: string): Observable<any>{
    return this.http.get('http://localhost:3002/api/v1/guestRoute/searchGuest', {
      headers:{id}
    })
  }

  public getAllGuests(): Observable<any>{
    return this.http.get('http://localhost:3002/api/v1/guestRoute/getAllGuests');
  }
}
