export class Student {
  constructor(
    _id = '',
    name= '',
    lastName= '',
    gender= '',
    dob= '',
    email= '',
    phoneNumber= '',
    address = '',
    code = '',
    motherName= '',
    fatherName = '',
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
    this.motherName = motherName;
    this.fatherName = fatherName;
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
  motherName: string;
  fatherName : string;
  image: string;
  createdDate : string;
  userId : string;

}

export interface Student {
  _id?: string;
  name: string;
  lastName: string;
  gender: string;
  dob: string;
  email: string;
  phoneNumber: string;
  address : string;
  code : string;
  motherName: string;
  fatherName : string;
  image: string;
  createdDate : string;
  userId : string;
}
