import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Trailer } from '../models/trailer.model';


@Injectable({
  providedIn: 'root'
})
export class TrailerService {
  selectedTrailer: Trailer;

  trailers!: Trailer[];
  constructor(private http: HttpClient)
  {
      this.selectedTrailer = new Trailer();
  }
  //TODO: Cambiar el any a Trailer
  getTrailers(){
    return this.http.get<Trailer>(environment.ApiUrl + 'trailer');
  }
  createTrailer(_trailer : Trailer ){
    return this.http.post<Trailer>(environment.ApiUrl + 'trailer', _trailer);
  }
  putTrailer(trailer:Trailer){
    return this.http.put(`${environment.ApiUrl}trailer/${trailer._id}`,trailer);
  }
  updateTrailer(id:string|number, trailer: Trailer){
    return this.http.put(`${environment.ApiUrl}trailer/${id}`, trailer);

  }
  deleteTrailer(id: string ){
    return this.http.delete(`${environment.ApiUrl}trailer/${id}`);
  }

  getTrailer(id: string){
    return this.http.get<Trailer>(`${environment.ApiUrl}trailer/${id}`)
  }
}
