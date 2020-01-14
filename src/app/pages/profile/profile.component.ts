import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  movies;

  constructor(private moviesService: MoviesService) {
    this.movies = this.moviesService.getUserWatchedMovies()
  }

  ngOnInit() {
  }

}
