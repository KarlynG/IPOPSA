export class Area {
  constructor(
    _id = '',
    name = '',
    code = '',
  ) {
    this._id = _id;
    this.name = name;
    this.code = code;
  }
  _id?: string;
  name: string;
  code: string;
}
export interface Area {
  _id?: string;
  name: string;
  code: string;
}
