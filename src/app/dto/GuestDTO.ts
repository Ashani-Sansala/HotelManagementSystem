export default class GuestDTO {
   public id: string;
   public name: string;
   public contact: number;
   public email: string;
   public country: string;
   public gender: string;
   public address: string;


  constructor(id: string, name: string, contact: number, email: string, country: string, gender: string, address: string) {
    this.id = id;
    this.name = name;
    this.contact = contact;
    this.email = email;
    this.country = country;
    this.gender = gender;
    this.address = address;
  }
}
