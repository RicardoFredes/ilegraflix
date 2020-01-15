import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user: any;
  logout: () => void;
  openFloatMenu = false;

  @Input() goBackLink: string;
  @Input() isProfilePage: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.user = this.authService.getUser();
    this.logout = () => {
      this.router.navigate(['/entrar']);
      this.authService.logout();
    };
  }

}
