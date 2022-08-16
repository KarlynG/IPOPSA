export class Grade {
  constructor(
    _id = '',
    grade = '',
    code = '',
  ) {
    this._id = _id;
    this.grade = grade;
    this.code = code;
  }

  _id?: string;
  grade: string;
  code : string;
}
export interface Grade {
  _id?: string;
  grade: string;
    code : string;
}
