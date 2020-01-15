import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  movie: Movie;
  movieId: number;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
  ) {
    const movieId = this.route.snapshot.paramMap.get('movie');
    this.movieId = Number(movieId);
    this.movie = this.moviesService.getMovie(this.movieId);
   }

  ngOnInit() {
  }

}
