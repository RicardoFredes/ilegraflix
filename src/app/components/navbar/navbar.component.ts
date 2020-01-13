import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user: any;
  logout: Function;
  openFloatMenu: boolean = false

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.user = auth.getUser()
    this.logout = function() {
      router.navigate(['/entrar'])
      auth.logout()
    }
  }

}
