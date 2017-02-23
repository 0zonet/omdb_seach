import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';
import "./rxjs-operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private moviesService : MoviesService){

  }
  addMovie(){
    this.moviesService.movies.push({
      title: "frozen",
      id: "8238"
    });
  }

}
