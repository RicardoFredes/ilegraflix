import { Injectable } from '@angular/core';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor() {
  }

  public getCommentsByMovieId(movieId: number) {
    return getComments(movieId)
  }

  public saveComment(movieId: number | string, comment: Comment) {
    const comments = [comment, ...getComments(movieId)]
    localStorage.setItem(getKey(movieId), JSON.stringify(comments))
  }

}

function getComments(id: number | string) {
  return JSON.parse(localStorage.getItem(getKey(id)) || '[]')
}

function getKey(id :number | string) {
  return `movie-${id}`
}

