import { Attendance } from './../../models/attendance.model';
import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/services/attendance.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent3 implements OnInit {

  attendance: Attendance = {
    _id : '',
    studentId : '',
    teacherId : '',
    createdDate :  '',
    status: '',
    userId : ''
  };

  attendances : any = [];
  constructor(public attendanceService : AttendanceService) { }

  ngOnInit(): void {
    this.attendanceService.getAttendances().subscribe(
      (res) => {
        console.log(res);
        this.attendances = res;
      },
      (err) => console.log(err)
    );
  }
  resetForm(form: NgForm) {
    form.reset();
  }
  refresh(): void {
    window.location.reload();
  }

  createAttendance(form: NgForm) {
    if (form.value._id) {
      const id = form.value.id;
      const data = form.value;
      console.log(id);
      console.log(data);
      this.attendanceService.updateAttendance(form.value._id, form.value).subscribe(
        (res) => {
          console.log(res);
          this.attendanceService.getAttendances();
          form.reset();
          this.refresh();
        },
        (err) => console.log(err)
      );
    } else {
      this.attendanceService.createAttendance(this.attendance).subscribe(
        (res) => {
          console.log(res);
          this.attendanceService.getAttendances();
          form.reset();
          this.refresh();
        },
        (err) => console.log(err)
      );
    }
  }

  editAttendance(attendance: Attendance) {
    this.attendanceService.selectedAttendance = attendance;
    console.log(attendance);
  }

  deleteAttendance(id: string) {
    this.attendanceService.deleteAttendance(id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
    this.refresh();
  }

}
