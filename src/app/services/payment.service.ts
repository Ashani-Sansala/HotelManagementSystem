import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import PaymentDTO from "../dto/PaymentDTO";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  public newPayment(dto: PaymentDTO): Observable<any>{
    return this.http.post('http://localhost:3002/api/v1/paymentRoute/newPayment', {
      payId: dto.payId,
      resId: dto.resId,
      roomCharge: dto.roomCharge,
      other: dto.other,
      total: dto.total,
      method: dto.method,
      date: dto.date,
      received: dto.received,
    })
  }

  public getAllPayments(): Observable<any>{
    return this.http.get('http://localhost:3002/api/v1/paymentRoute/getAllPayments');
  }

}
