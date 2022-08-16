import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import { NgForm } from '@angular/forms';
import { Teacher } from 'src/app/models/teacher.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teacher : Teacher = {
    _id: '',
    name: '',
    lastName : '',
    dob : '',
    email : '',
    cedula : '',
    phoneNumber : '',
    address : '',
    code : '',
    gender : '',
    image : '',
    createdDate : '',
    userId : ''
  };
  teachers : any = [];
  constructor(public teacherService : TeacherService) { }

  ngOnInit(): void {
    this.teacherService.getTeachers().subscribe(
      (res) => {
        console.log(res);
        this.teachers = res;
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

  createTeacher(form: NgForm) {
    if (form.value._id) {
      const id = form.value.id;
      const data = form.value;
      console.log(id);
      console.log(data);
      this.teacherService.updateTeacher(form.value._id, form.value).subscribe(
        (res) => {
          console.log(res);
          this.teacherService.getTeachers();
          form.reset();
          this.refresh();
        },
        (err) => console.log(err)
      );
    } else {
      this.teacherService.createTeacher(this.teacher).subscribe(
        (res) => {
          console.log(res);
          this.teacherService.getTeachers();
          form.reset();
          this.refresh();
        },
        (err) => console.log(err)
      );
    }
  }

  editTeacher(teacher: Teacher) {
    this.teacherService.selectedTeacher = teacher;
    console.log(teacher);
  }

  deleteTeacher(id: string) {
    this.teacherService.deleteTeacher(id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
    this.refresh();
  }

}
