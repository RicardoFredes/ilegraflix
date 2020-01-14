import { Injectable } from '@angular/core';
import { MOVIES } from '../mocks/movies.mock';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  public getMovies() {
    return MOVIES;
  }

  public getMovie(id: number) {
    const movies = flatArray(MOVIES, 'list')
    return movies.find((movie: Movie) => movie.id === id)
  }
}

function flatArray(arr: any[], key: string) {
  return arr.reduce((acc, el) => {
    if (key) return ([...acc, ...el[key]])
    return ([...acc, ...el])
  }, [])
}
