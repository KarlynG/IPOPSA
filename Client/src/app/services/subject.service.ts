import { Subject } from './../models/subject.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  selectedSubject: Subject;

  Subjects!: Subject[];
  constructor(private http: HttpClient)
  {
      this.selectedSubject = new Subject();
  }

  getSubjects(){
    return this.http.get<Subject>(environment.ApiUrl + 'subject');
  }
  createSubject(_Subject : Subject ){
    return this.http.post<Subject>(environment.ApiUrl + 'subject', _Subject);
  }
  putSubject(subject:Subject){
    return this.http.put(`${environment.ApiUrl}subject/${subject._id}`,subject);
  }
  updateSubject(id:string|number, Subject: Subject){
    return this.http.put(`${environment.ApiUrl}subject/${id}`, Subject);

  }
  deleteSubject(id: string ){
    return this.http.delete(`${environment.ApiUrl}subject/${id}`);
  }

  getSubject(id: string){
    return this.http.get<Subject>(`${environment.ApiUrl}subject/${id}`)
  }
}
