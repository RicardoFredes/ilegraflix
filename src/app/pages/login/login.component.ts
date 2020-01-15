import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model = {
    email: '',
    password: ''
  };

  login: any;
  loginHasError = false;

  constructor(private auth: AuthService, private router: Router) {
    this.login = this.auth.login;
  }

  onSubmit() {
    const { email, password } = this.model;
    this.login(email, password)
      .then(() => this.router.navigate(['/']))
      .catch(() => {
        this.loginHasError = true;
        this.model.password = '';
      });
  }

}
