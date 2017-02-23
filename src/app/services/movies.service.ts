import { Injectable } from '@angular/core';
import { Movie } from '../movies/movie';
import { Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MoviesService {
  
  movies : Movie[];
  
  constructor(private http : Http) { 
    this.movies = [
      {title: "Primera pelicula",id: "9864"},
      {title: "Segunda pelicula",id: "9865"},
      {title: "Tercera pelicula",id: "9866"}
    ];
  }
  
  search(keyword : string){
    this.getMovies(keyword).subscribe(
      respuesta => this.movies = respuesta,
      error => console.log(error)
    );
  }

  getMovies(keyword : string) : Observable<Movie[]>{
    return this.http
               .get("http://www.omdbapi.com/?s="+keyword)
               .map(this.parseResponse)
               .catch(()=> Observable.throw("Algo salió mal"));
  }

  parseResponse(response : Response) : Movie[]{
      if(!response.json() || !response.json().Search) return [];

      return response.json().Search.map(
        jsonMovie => console.log(jsonMovie)
      );
  }

}
