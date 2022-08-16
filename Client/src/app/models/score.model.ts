export class Score {
  constructor(
    _id = '',
    subjectId = '',
    teacherId = '',
    createdDate =  '',
    score = 0,
    userId = '',
  ) {
    this._id = _id;
    this.subjectId = subjectId;
    this.teacherId = teacherId;
    this.createdDate = createdDate;
    this.score = score;
    this.userId = userId;
  }

  _id?: string;
  subjectId: string;
  teacherId: string;
  score: number;
  createdDate : string;
  userId: string;

}

export interface Score {
  _id?: string;
  subjectId: string;
  teacherId: string;
  score: number;
  createdDate : string;
  userId: string;
}
