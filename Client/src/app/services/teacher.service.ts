import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../models/teacher.model';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  selectedTeacher: Teacher;

  Teachers!: Teacher[];
  constructor(private http: HttpClient)
  {
      this.selectedTeacher = new Teacher();
  }

  getTeachers(){
    return this.http.get<Teacher>(environment.ApiUrl + 'teacher');
  }
  createTeacher(_Teacher : Teacher ){
    return this.http.post<Teacher>(environment.ApiUrl + 'teacher', _Teacher);
  }
  putTeacher(Teacher:Teacher){
    return this.http.put(`${environment.ApiUrl}teacher/${Teacher._id}`,Teacher);
  }
  updateTeacher(id:string|number, Teacher: Teacher){
    return this.http.put(`${environment.ApiUrl}teacher/${id}`, Teacher);

  }
  deleteTeacher(id: string ){
    return this.http.delete(`${environment.ApiUrl}teacher/${id}`);
  }

  getTeacher(id: string){
    return this.http.get<Teacher>(`${environment.ApiUrl}teacher/${id}`)
  }
}
