import { Injectable } from '@angular/core';
import { CrmEventsService } from 'src/app/services/crm-events.service';
import { MOVIES } from '../mocks/movies.mock';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesList: Movie[] = [];
  userWatchedMovies: any[] = [];
  userWatchedMoviesId;

  constructor(private crmEventsService: CrmEventsService) {
    this.userWatchedMoviesId = () => this.crmEventsService.get('watched');
    this.moviesList = flatArray(MOVIES, 'list');
  }

  public getMovies() {
    const list = this.userWatchedMoviesId().map((id: number) => findById(this.moviesList, id));
    if (list.length === 0) return MOVIES;
    const userList = {
      category: 'Pessoal',
      title: 'Últimos Assistidos',
      list
    };
    return [userList, ...MOVIES];
  }

  public getUserWatchedMovies() {
    return  {
      category: 'Pessoal',
      title: 'Últimos Assistidos',
      list: this.userWatchedMoviesId().map((id: number) => findById(this.moviesList, id))
    };
  }

  public getMovie(id: number) {
    return findById(this.moviesList, id);
  }
}

function findById(arr: any[], id: number) {
  return arr.find((el) => el.id === id);
}

function flatArray(arr: any[], key: string) {
  return arr.reduce((acc, el) => {
    if (key) { return ([...acc, ...el[key]]); }
    return ([...acc, ...el]);
  }, []);
}
