import { Component, OnInit } from '@angular/core';
import {EquipmentService, Movie} from '../../services/equipment.service';
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {


  movie: Movie={
    mov_id: " ",
    mov_title: "",
    mov_year: 0,
    mov_time: 0 ,
    mov_rel_country: ""
  };

  constructor(private EquipmentService:EquipmentService, 
                      private Router: Router,
                      private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <string>this.ActivatedRoute.snapshot.params.id;
    console.log('Id de entrada',id_entrada)

    if(id_entrada){
      this.EquipmentService.getaMovie(id_entrada).subscribe(
        (res: any)=>{
          this.movie= res[0];
        },
        err=> console.log(err)
      )
    }
  };

  modifiy(){
      this.EquipmentService.modifyMovie(this.movie.mov_id, this.movie).subscribe(
        res=>{
          console.log(res)
        },
        err=>console.log(err)
      )

      this.Router.navigate(['/home'])
  }
}
