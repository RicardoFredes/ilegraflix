import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CommentsService } from 'src/app/services/comments.service';
import { Comment } from 'src/app/models/comment.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  user: User;
  text: string;
  comments: Comment[] = [];
  getComments;
  saveComment;
  @Input() movieId: number;

  constructor(
    private authService: AuthService,
    private commentsService: CommentsService,
  ) {
    this.getComments = this.commentsService.getCommentsByMovieId;
    this.saveComment = this.commentsService.saveComment;
  }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.comments = this.getComments(this.movieId);
  }

  public get title(): string {
    const quantify = this.comments.length;
    if (quantify === 0 ) { return 'Seja o primeiro a comentar'; }
    return `${quantify} comentário${quantify > 1 ? 's' : ''}`;
  }

  public isDisable(): boolean {
    return !this.text || this.text.length < 5;
  }

  public onSubmit() {
    const movieId = this.movieId;
    const comment: Comment = {
      movieId,
      name: this.user.name,
      thumbnail: this.user.thumbnail,
      text: this.text,
    };
    this.text = '';
    this.saveComment(movieId, comment);
    this.comments = this.getComments(this.movieId);
  }

}
