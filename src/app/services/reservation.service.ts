import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import ReservationDTO from "../dto/ReservationDTO";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  public newReservation(dto: ReservationDTO):Observable<any>{
    return this.http.post('http://localhost:3002/api/v1/reservationRoute/newReservation', {
      resId: dto.resId,
      guestId: dto.guestId,
      rooms: dto.rooms,
      roomType: dto.roomType,
      adults: dto.adults,
      children: dto.children,
      days: dto.days,
      checkIn: dto.checkIn,
      checkOut: dto.checkOut,
    })

  }

  public updateReservation(dto: ReservationDTO): Observable<any>{
    return this.http.put('http://localhost:3002/api/v1/reservationRoute/updateReservation', {
      resId: dto.resId,
      guestId: dto.guestId,
      rooms: dto.rooms,
      roomType: dto.roomType,
      adults: dto.adults,
      children: dto.children,
      days: dto.days,
      checkIn: dto.checkIn,
      checkOut: dto.checkOut,
    })
  }

  public cancelReservation(resId: string): Observable<any>{
    return this.http.delete('http://localhost:3002/api/v1/reservationRoute/cancelReservation', {
      headers:{resId}
    })
  }

  public searchReservation(resId: string): Observable<any>{
    return this.http.get('http://localhost:3002/api/v1/reservationRoute/searchReservation', {
      headers:{resId}
    })
  }

  public getAllReservations(): Observable<any>{
    return this.http.get('http://localhost:3002/api/v1/reservationRoute/getAllReservations');
  }
}
