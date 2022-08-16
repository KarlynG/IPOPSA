import { Score } from './../../models/score.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreService } from 'src/app/services/score.service';


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent2 implements OnInit {

  score : Score = {
    _id : '',
    subjectId: '',
    teacherId :'',
    createdDate :'',
    score: 0,
    userId : '',
  }
  scores : any = [];
  constructor(public scoreService : ScoreService) { }

  ngOnInit(): void {
    this.scoreService.getScores().subscribe(
      (res) => {
        console.log(res);
        this.scores = res;
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

  create(form: NgForm) {
    if (form.value._id) {
      const id = form.value.id;
      const data = form.value;
      console.log(id);
      console.log(data);
      this.scoreService.updateScore(form.value._id, form.value).subscribe(
        (res) => {
          console.log(res);
          this.scoreService.getScores();
          form.reset();
          this.refresh();
        },
        (err) => console.log(err)
      );
    } else {
      this.scoreService.createScore(this.score).subscribe(
        (res) => {
          console.log(res);
          this.scoreService.getScores();
          form.reset();
          this.refresh();
        },
        (err) => console.log(err)
      );
    }
  }

  edit(score: Score) {
    this.scoreService.selectedScore = score;
    console.log(score);
  }

  delete(id: string) {
    this.scoreService.deleteScore(id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
    this.refresh();
  }

}
