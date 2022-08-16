import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import BaseEntity from "../models/Base/base.model";
//import { Course } from "../models/trailer.model";

@Injectable({
  providedIn : 'root'
})
export class GenericService<T extends BaseEntity>{

  constructor(public  http: HttpClient){}

  public getAll(){
    return this.http.get(`${environment.ApiUrl}/get`);
  }

  public getById(id: number){
    return this.http.get(`${environment.ApiUrl}/getById/${id}`);
  }

  // public create(data: Course){
  //   return this.http.post(`${environment.ApiUrl}/create`,data);
  // }

  // public update(data: Course){
  //   return this.http.put(`${environment.ApiUrl}/update/`,data);
  // }

  public delete(id: number){
    return this.http.delete(`${environment.ApiUrl}/delete/${id}`)
  }
}
