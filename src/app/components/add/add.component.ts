import { Component, OnInit } from '@angular/core';
import {EquipmentService, Movie} from '../../services/equipment.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  movie: Movie={
    mov_id: " ",
    mov_title: "",
    mov_year: 0,
    mov_time: 0 ,
    mov_rel_country: "",
    mov_dt_rel: 0
  };

  constructor(private EquipmentService:EquipmentService, private Router: Router) { }

  ngOnInit(): void {
  }

  add(){
    delete this.movie.mov_id

    this.EquipmentService.addMovie(this.movie).subscribe();
    this.Router.navigate(['/home'])
  }

}
