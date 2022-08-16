import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Area } from '../models/area.model';


@Injectable({
  providedIn: 'root'
})
export class AreaService {
  selectedArea: Area;

  Areas!: Area[];
  constructor(private http: HttpClient)
  {
      this.selectedArea = new Area();
  }
  //TODO: Cambiar el any a Area
  getAreas(){
    return this.http.get<Area>(environment.ApiUrl + 'area');
  }
  createArea(_Area : Area ){
    return this.http.post<Area>(environment.ApiUrl + 'area', _Area);
  }
  putArea(Area:Area){
    return this.http.put(`${environment.ApiUrl}area/${Area._id}`,Area);
  }
  updateArea(id:string|number, Area: Area){
    return this.http.put(`${environment.ApiUrl}area/${id}`, Area);

  }
  deleteArea(id: string ){
    return this.http.delete(`${environment.ApiUrl}area/${id}`);
  }

  getArea(id: string){
    return this.http.get<Area>(`${environment.ApiUrl}area/${id}`)
  }
}
