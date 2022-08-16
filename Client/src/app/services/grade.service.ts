import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Grade } from '../models/grade.model';


@Injectable({
  providedIn: 'root'
})
export class GradeService {
  selectedGrade: Grade;

  Grades!: Grade[];
  constructor(private http: HttpClient)
  {
      this.selectedGrade = new Grade();
  }

  getGrades(){
    return this.http.get<Grade>(environment.ApiUrl + 'grade');
  }
  createGrade(_Grade : Grade ){
    return this.http.post<Grade>(environment.ApiUrl + 'grade', _Grade);
  }
  putGrade(Grade:Grade){
    return this.http.put(`${environment.ApiUrl}grade/${Grade._id}`,Grade);
  }
  updateGrade(id:string|number, Grade: Grade){
    return this.http.put(`${environment.ApiUrl}grade/${id}`, Grade);

  }
  deleteGrade(id: string ){
    return this.http.delete(`${environment.ApiUrl}grade/${id}`);
  }

  getGrade(id: string){
    return this.http.get<Grade>(`${environment.ApiUrl}grade/${id}`)
  }
}
