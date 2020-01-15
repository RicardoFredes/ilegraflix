import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  movies;
  user: User;

  constructor(
    private authService: AuthService,
    private moviesService: MoviesService,
  ) {
    this.movies = this.moviesService.getUserWatchedMovies();
    this.user = this.authService.getUser();
  }

}
