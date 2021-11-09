import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import RoomDTO from "../dto/RoomDTO";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  public addRoom(dto: RoomDTO): Observable<any>{
    return this.http.post('http://localhost:3002/api/v1/roomRoute/addRoom', {
      roomId: dto.roomId,
      type: dto.type,
      floor: dto.floor,
      roomStatus: dto.roomStatus,
      amount: dto.amount,
      cleaningStatus: dto.cleaningStatus
    })
  }

  public updateRoom(dto: RoomDTO): Observable<any>{
    return this.http.put('http://localhost:3002/api/v1/roomRoute/updateRoom', {
      roomId: dto.roomId,
      type: dto.type,
      floor: dto.floor,
      roomStatus: dto.roomStatus,
      amount: dto.amount,
      cleaningStatus: dto.cleaningStatus
    })
  }

  public removeRoom(roomId: string): Observable<any>{
    return this.http.delete('http://localhost:3002/api/v1/roomRoute/removeRoom', {
      headers:{roomId}
    })
  }

  public searchRoom(roomId: string): Observable<any>{
    return this.http.get('http://localhost:3002/api/v1/roomRoute/searchRoom', {
      headers:{roomId}
    })
  }

  public showRoomDetails(): Observable<any>{
    return this.http.get('http://localhost:3002/api/v1/roomRoute/showRoomDetails');
  }

}
