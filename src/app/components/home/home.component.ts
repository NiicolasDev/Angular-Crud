import { Component, OnInit } from '@angular/core';
import {EquipmentService, Movie} from '../../services/equipment.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {


  //Variable
  ListMovies: Movie[] = [];

  constructor(private EquipmentService:EquipmentService, private router:Router) { }

  ngOnInit(): void {
    this.listMovies()
  }

  date(date: any){
      const Date:any[] = date?.split('-')
      return [Date[2].split('T')[0], Date[1], Date[0]].join('-')
  }
  listMovies()
  {
    this.EquipmentService.getMovies().subscribe(
      res=>{
        console.log(res)
        this.ListMovies=<any>res;
      },
      err => console.log(err)
    )
  }

  delet(id: any){
    console.log(id)
    this.EquipmentService.deletMovie(id).subscribe( 
      res=>{
        console.log('Movie eliminada', res);
        this.listMovies()
    },
      err=> console.log(err)
    )
  }

  modify(id:any){
    this.router.navigate(['/modify/'+ id]);
  }

}
