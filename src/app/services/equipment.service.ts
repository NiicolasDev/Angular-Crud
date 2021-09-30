import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  url='/api'
  constructor( private http: HttpClient ) { }

  //Get movies
  getMovies()
  {
    return this.http.get(this.url)
  }

  //Get a movies
  getaMovie(id:string)
  {
    return this.http.get(this.url+'/'+id)
  }

  //add movie
  addMovie(movie: any)
  {
    return this.http.post(this.url,movie)
  }

  //Delet movie
  deletMovie(id:string)
  {
    return this.http.delete(this.url+'/'+id)
  }

  //Modify
  modifyMovie(id: any, movie:Movie)
  {
    return this.http.put(this.url+'/'+id, movie)
  }
};

export interface Movie{
  mov_id? : string,
  mov_title?: string,
  mov_year?: number,
  mov_time?: number,
  mov_dt_rel? :number
  mov_rel_country? :string,
};