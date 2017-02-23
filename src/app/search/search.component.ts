import { Component, OnInit } from '@angular/core';
import {MoviesService } from '../services/movies.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  keyword : string = "";
  searchControl : FormControl = new FormControl();


  constructor(private moviesService : MoviesService) { }

  ngOnInit() {
    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(
      newValue => this.moviesService.search(newValue)
    );
  }

  search(){
    this.moviesService.search(this.keyword);
  }


}
