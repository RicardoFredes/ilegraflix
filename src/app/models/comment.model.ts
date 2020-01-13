import { User } from './user.model'
import { Movie } from './movie.model';

export class Comment {
  id: string;
  rating: number;
  text: string;
  user: User;
  movie: Movie;
}