import { Grade } from './../../models/grade.model';
import { GradeService } from './../../services/grade.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {

  grade : Grade = {
    _id: '',
    grade: '',
    code : ''
  };

  grades : any = [];

  constructor(public gradeService : GradeService) { }

  ngOnInit(): void {
  this.gradeService.getGrades().subscribe(
      (res) => {
        console.log(res);
        this.grades = res;
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

  createGrade(form: NgForm) {
    if (form.value._id) {
      const id = form.value.id;
      const data = form.value;
      console.log(id);
      console.log(data);
      this.gradeService.updateGrade(form.value._id, form.value).subscribe(
        (res) => {
          console.log(res);
          this.gradeService.getGrades();
          form.reset();
          this.refresh();
        },
        (err) => console.log(err)
      );
    } else {
      this.gradeService.createGrade(this.grade).subscribe(
        (res) => {
          console.log(res);
          this.gradeService.getGrades();
          form.reset();
          this.refresh();
        },
        (err) => console.log(err)
      );
    }
  }

  editGrade(grade: Grade) {
    this.gradeService.selectedGrade = grade;
    console.log(grade);
  }

  deleteGrade(id: string) {
    this.gradeService.deleteGrade(id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
    this.refresh();
  }

}
