import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.model';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  selectedStudent: Student;

  Students!: Student[];
  constructor(private http: HttpClient)
  {
      this.selectedStudent = new Student();
  }

  getStudents(){
    return this.http.get<Student>(environment.ApiUrl + 'student');
  }
  createStudent(_Student : Student ){
    return this.http.post<Student>(environment.ApiUrl + 'student', _Student);
  }
  putStudent(Student:Student){
    return this.http.put(`${environment.ApiUrl}student/${Student._id}`,Student);
  }
  updateStudent(id:string|number, Student: Student){
    return this.http.put(`${environment.ApiUrl}student/${id}`, Student);

  }
  deleteStudent(id: string ){
    return this.http.delete(`${environment.ApiUrl}student/${id}`);
  }

  getStudent(id: string){
    return this.http.get<Student>(`${environment.ApiUrl}student/${id}`)
  }
}
