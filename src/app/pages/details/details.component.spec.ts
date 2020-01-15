import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { DetailsComponent } from './details.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { MovieDetailsComponent } from 'src/app/components/movie-details/movie-details.component';
import { CommentsListComponent } from 'src/app/components/comments-list/comments-list.component';
import { CommentComponent } from 'src/app/components/comment/comment.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DetailsComponent,
        NavbarComponent,
        MovieDetailsComponent,
        CommentsListComponent,
        CommentComponent
      ],
      imports: [ RouterModule.forRoot([]), FormsModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
