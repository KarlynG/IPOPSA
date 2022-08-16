export class Subject {
  constructor(
    _id = '',
    name= '',
    code= '',
    areaId= '',
    userId= '',

  ) {
    this._id = _id;
    this.name = name;
    this.code = code;
    this.areaId = areaId;
    this.userId = userId;

  }

  _id?: string;
  name: string;
  code : string;
  areaId : string;
  userId : string;
}

export interface Teacher {
  _id?: string;
  name: string;
  code : string;
  areaId : string;
  userId : string;
}
