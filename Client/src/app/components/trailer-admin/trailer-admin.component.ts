import { Component, OnInit } from '@angular/core';
import { TrailerService } from 'src/app/services/trailer.service';
import { NgForm } from '@angular/forms';
import { Trailer } from 'src/app/models/trailer.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trailer-admin',
  templateUrl: './trailer-admin.component.html',
  styleUrls: ['./trailer-admin.component.css'],
})
export class TrailerAdminComponent implements OnInit {
  trailer: Trailer = {
    _id: '',
    name: '',
    description: '',
    category: '',
    image: '',
    director: '',
    actors: '',
    year: '',
    link: '',
  };
  categorias: string[] = ['Ficcion', 'Magia', 'Romance', 'Comedia'];
  trailers: any = [];

  constructor(public trailerService: TrailerService) {}

  ngOnInit(): void {
    this.trailerService.getTrailers().subscribe(
      (res) => {
        console.log(res);
        this.trailers = res;
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

  //TODO: REFACTORIZAR EL METODO Y HACER QUE ESTE AUTOMATICAMENTE CARGEUE
  createTrailer(form: NgForm) {
    if (form.value._id) {
      const id = form.value.id;
      const data = form.value;
      console.log(id);
      console.log(data);
      this.trailerService.updateTrailer(form.value._id, form.value).subscribe(
        (res) => {
          console.log(res);
          this.trailerService.getTrailers();
          form.reset();
          this.refresh();
        },
        (err) => console.log(err)
      );
    } else {
      this.trailerService.createTrailer(this.trailer).subscribe(
        (res) => {
          console.log(res);
          this.trailerService.getTrailers();
          form.reset();
          this.refresh();
        },
        (err) => console.log(err)
      );
    }
  }

  editTrailer(trailer: Trailer) {
    this.trailerService.selectedTrailer = trailer;
    console.log(trailer);
  }

  deleteTrailer(id: string) {
    this.trailerService.deleteTrailer(id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
    this.refresh();
  }

}
