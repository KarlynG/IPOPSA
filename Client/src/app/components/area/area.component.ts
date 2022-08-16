import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/services/area.service';
import { NgForm } from '@angular/forms';
import { Area } from 'src/app/models/area.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  area: Area = {
    _id: '',
    name: '',
    code: ''
  };
  areaList : string [] = ['Artes gráficas', 'Artes Visuales', 'Contabilidad', 'Electricidad', 'Electrónica', 'Informática', 'Música', 'Refrigeración'];
  areas : any = [];


  constructor(public areaService : AreaService) { }

  ngOnInit(): void {
    this.areaService.getAreas().subscribe(
      (res) => {
        console.log(res);
        this.areas = res;
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

  createArea(form: NgForm) {
    if (form.value._id) {
      const id = form.value.id;
      const data = form.value;
      console.log(id);
      console.log(data);
      this.areaService.updateArea(form.value._id, form.value).subscribe(
        (res) => {
          console.log(res);
          this.areaService.getAreas();
          form.reset();
          this.refresh();
        },
        (err) => console.log(err)
      );
    } else {
      this.areaService.createArea(this.area).subscribe(
        (res) => {
          console.log(res);
          this.areaService.getAreas();
          form.reset();
          this.refresh();
        },
        (err) => console.log(err)
      );
    }
  }

  editArea(area: Area) {
    this.areaService.selectedArea = area;
    console.log(area);
  }

  deleteArea(id: string) {
    this.areaService.deleteArea(id).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
    this.refresh();
  }

}
