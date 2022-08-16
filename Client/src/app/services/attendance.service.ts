import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Attendance } from '../models/attendance.model';


@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  selectedAttendance: Attendance;

  Attendances!: Attendance[];
  constructor(private http: HttpClient)
  {
      this.selectedAttendance = new Attendance();
  }
  //TODO: Cambiar el any a Attendance
  getAttendances(){
    return this.http.get<Attendance>(environment.ApiUrl + 'attendance');
  }
  createAttendance(_Attendance : Attendance ){
    return this.http.post<Attendance>(environment.ApiUrl + 'attendance', _Attendance);
  }
  putAttendance(Attendance:Attendance){
    return this.http.put(`${environment.ApiUrl}attendance/${Attendance._id}`,Attendance);
  }
  updateAttendance(id:string|number, Attendance: Attendance){
    return this.http.put(`${environment.ApiUrl}attendance/${id}`, Attendance);

  }
  deleteAttendance(id: string ){
    return this.http.delete(`${environment.ApiUrl}attendance/${id}`);
  }

  getAttendance(id: string){
    return this.http.get<Attendance>(`${environment.ApiUrl}attendance/${id}`)
  }
}
