export class Attendance {
  constructor(
    _id = '',
    studentId = '',
    teacherId = '',
    createdDate =  '',
    status = '',
    userId = '',
  ) {
    this._id = _id;
    this.studentId = studentId;
    this.teacherId = teacherId;
    this.createdDate = createdDate;
    this.status = status;
    this.userId = userId;
  }

  _id?: string;
  studentId: string;
  teacherId: string;
  createdDate: string;
  status: string;
  userId: string;

}

export interface Attendance {
  _id?: string;
  studentId: string;
  teacherId: string;
  createdDate: string;
  status: string;
  userId: string;
}
