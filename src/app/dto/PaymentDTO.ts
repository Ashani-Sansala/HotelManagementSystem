export default class PaymentDTO {
  public payId: string;
  public resId: string;
  public roomCharge: string;
  public other: string;
  public total: string;
  public method: string;
  public date: string;
  public received: string;


  constructor(payId: string, resId: string, roomCharge: string, other: string, total: string, method: string, date: string, received: string) {
    this.payId = payId;
    this.resId = resId;
    this.roomCharge = roomCharge;
    this.other = other;
    this.total = total;
    this.method = method;
    this.date = date;
    this.received = received;
  }
}

