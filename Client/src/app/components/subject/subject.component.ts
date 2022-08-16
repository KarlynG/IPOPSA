import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject.model';
import { SubjectService } from 'src/app/services/subject.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subject : Subject = {
   _id : '',
  name: '',
  code: '',
  areaId: '',
  userId: '',
};

subjects : any = [];
  constructor(public subjectService : SubjectService) { }

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe(
      (res) => {
        console.log(res);
        this.subjects = res;
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

  createSubject(form: NgForm) {
    if (form.value._id) {
      const id = form.value.id;
      const data = form.value;
      console.log(id);
      console.log(data);
      this.subjectService.updateSubject(form.value._id, form.value).subscribe(
        (res) => {
          console.log(res);
          this.subjectService.getSubjects();
          form.reset();
          this.refresh();
        },
        (err) => console.log(err)
      );
    } else {
      this.subjectService.createSubject(this.subject).subscribe(
        (res) => {
          console.log(res);
          this.subjectService.getSubjects();
          form.reset();
          this.refresh();
        },
        (err) => console.log(err)
      );
    }
  }

  editSubject(subject: Subject) {
    this.subjectService.selectedSubject = subject;
    console.log(subject);
  }

  deleteSubject(id: string) {
    this.subjectService.deleteSubject(id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
    this.refresh();
  }

}
