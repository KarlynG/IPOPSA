import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { NgForm } from '@angular/forms';
import { Student } from 'src/app/models/student.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: Student = {
    _id: '',
    name: '',
    lastName : '',
    dob : '',
    email : '',
    motherName : '',
    fatherName : '',
    phoneNumber : '',
    address : '',
    code : '',
    gender : '',
    image : '',
    createdDate : '',
    userId : ''

  };
  genero : string[] = ['Masculino', 'Femenino'];
  students : any = [];
  constructor(public studentService : StudentService) { }
  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      (res) => {
        console.log(res);
        this.students = res;
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

  createStudent(form: NgForm) {
    if (form.value._id) {
      const id = form.value.id;
      const data = form.value;
      console.log(id);
      console.log(data);
      this.studentService.updateStudent(form.value._id, form.value).subscribe(
        (res) => {
          console.log(res);
          this.studentService.getStudents();
          form.reset();
          this.refresh();
        },
        (err) => console.log(err)
      );
    } else {
      this.studentService.createStudent(this.student).subscribe(
        (res) => {
          console.log(res);
          this.studentService.getStudents();
          form.reset();
          this.refresh();
        },
        (err) => console.log(err)
      );
    }
  }

  editStudent(student: Student) {
    this.studentService.selectedStudent = student;
    console.log(student);
  }

  deleteStudent(id: string) {
    this.studentService.deleteStudent(id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
    this.refresh();
  }

}
