export class Teacher {
  constructor(
    _id = '',
    name= '',
    lastName= '',
    gender= '',
    dob= '',
    cedula= '',
    email= '',
    phoneNumber= '',
    address = '',
    code = '',
    image= '',
    createdDate = '',
    userId = '',
  ) {
    this._id = _id;
    this.name = name;
    this.lastName = lastName;
    this.gender = gender;
    this.dob = dob;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.code = code;
    this.cedula = cedula;
    this.image = image;
    this.createdDate = createdDate;
    this.userId = userId;
    this.email = email;
  }

  _id?: string;
  name: string;
  lastName: string;
  gender: string;
  dob: string;
  email: string;
  phoneNumber: string;
  address : string;
  code : string;
  cedula: string;
  image: string;
  createdDate : string;
  userId : string;

}

export interface Teacher {
  _id?: string;
  name: string;
  lastName: string;
  gender: string;
  dob: string;
  email: string;
  phoneNumber: string;
  address : string;
  code : string;
  cedula: string;
  image: string;
  createdDate : string;
  userId : string;
}
