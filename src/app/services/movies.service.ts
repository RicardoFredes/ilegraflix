import { Injectable } from '@angular/core';
import { MOVIES } from '../mocks/movies.mock';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  public getMovies() {
    return MOVIES;
  }
}
