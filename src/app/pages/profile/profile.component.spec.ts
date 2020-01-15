import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';
import { AuthService } from 'src/app/services/auth.service';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent, NavbarComponent, MovieListComponent ],
      imports: [ RouterModule.forRoot([]) ],
      providers: [ AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
