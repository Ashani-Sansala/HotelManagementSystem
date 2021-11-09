export default class ReservationDTO {
  public resId: string;
  public guestId: string;
  public rooms: string;
  public roomType: string;
  public adults: string;
  public children: string;
  public days: string;
  public checkIn: Date;
  public checkOut: Date;


  constructor(resId: string, guestId: string, rooms: string, roomType: string, adults: string, children: string, days: string, checkIn: Date, checkOut: Date) {
    this.resId = resId;
    this.guestId = guestId;
    this.rooms = rooms;
    this.roomType = roomType;
    this.adults = adults;
    this.children = children;
    this.days = days;
    this.checkIn = checkIn;
    this.checkOut = checkOut;
  }
}
