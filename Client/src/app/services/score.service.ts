import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Score } from '../models/score.model';


@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  selectedScore: Score;

  Scores!: Score[];
  constructor(private http: HttpClient)
  {
      this.selectedScore = new Score();
  }

  getScores(){
    return this.http.get<Score>(environment.ApiUrl + 'score');
  }
  createScore(_Score : Score ){
    return this.http.post<Score>(environment.ApiUrl + 'score', _Score);
  }
  putScore(Score:Score){
    return this.http.put(`${environment.ApiUrl}score/${Score._id}`,Score);
  }
  updateScore(id:string|number, Score: Score){
    return this.http.put(`${environment.ApiUrl}score/${id}`, Score);

  }
  deleteScore(id: string ){
    return this.http.delete(`${environment.ApiUrl}score/${id}`);
  }

  getScore(id: string){
    return this.http.get<Score>(`${environment.ApiUrl}score/${id}`)
  }
}
