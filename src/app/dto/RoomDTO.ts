export default class RoomDTO {
  public roomId: string;
  public type: string;
  public floor: number;
  public roomStatus: string;
  public amount: string;
  public cleaningStatus: string;


  constructor(roomId: string, type: string, floor: number, roomStatus: string, amount: string, cleaningStatus: string) {
    this.roomId = roomId;
    this.type = type;
    this.floor = floor;
    this.roomStatus = roomStatus;
    this.amount = amount;
    this.cleaningStatus = cleaningStatus;
  }
}
