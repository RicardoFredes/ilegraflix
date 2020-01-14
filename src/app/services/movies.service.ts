import { Injectable } from '@angular/core';
import { CrmEventsService } from 'src/app/services/crm-events.service';
import { MOVIES } from '../mocks/movies.mock';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesList: Movie[] = []
  userWatchedMovies: any[] = []
  userWatchedMoviesId: Function

  constructor(private crmEventsService: CrmEventsService) {
    this.userWatchedMoviesId = () => this.crmEventsService.get('watched')
    this.moviesList = flatArray(MOVIES, 'list')
  }

  public getMovies() {
    const userList = {
      category: "Pessoal",
      title: "Últimos Assistidos",
      list: this.userWatchedMoviesId().map((id: number) => findById(this.moviesList, id))
    }
    return [userList, ...MOVIES];
  }

  public getMovie(id: number) {
    return findById(this.moviesList, id)
  }
}

function findById(arr: any[], id: number) {
  return arr.find((el) => el.id === id)
}

function flatArray(arr: any[], key: string) {
  return arr.reduce((acc, el) => {
    if (key) return ([...acc, ...el[key]])
    return ([...acc, ...el])
  }, [])
}
