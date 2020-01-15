import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggIn: boolean;
  moviesList;

  constructor(
    private auth: AuthService,
    private moviesService: MoviesService,
    private router: Router,
  ) {
    this.isLoggIn = this.auth.isLoggIn();
    this.moviesList = this.moviesService.getMovies();
  }

  ngOnInit() {
    if (!this.isLoggIn) {
      this.router.navigate(['/entrar']);
    }
  }

}
