import { Injectable } from '@angular/core';
import { USERS } from '../mocks/users.mock';

const CREDENTIALS: string = 'credentials'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggIn(): boolean {
    const credential = localStorage.getItem(CREDENTIALS);
    if (!credential) return false
    return true
  }

  public getUser() {
    const credential = localStorage.getItem(CREDENTIALS)
    return JSON.parse(credential)
  }

  public login(userEmail: string, userPassword: string): Promise<any> {
    const user = USERS.find(user => user.email === userEmail);
    if (!user || user.password !== userPassword) {
      return Promise.reject({ error: 'Not found' });
    }
    delete user.password;
    delete user.id;
    localStorage.setItem(CREDENTIALS, JSON.stringify(user));
    return Promise.resolve(user);
  }

  public logout(): void {
    localStorage.removeItem(CREDENTIALS);
  }

}
