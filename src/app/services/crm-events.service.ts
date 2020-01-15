import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CrmEventsService {
  getEmail: () => string;

  constructor(private authService: AuthService) {
    this.getEmail = () => this.authService.getUser().email;
  }

  public post(eventType: string, movieId: number): void {
    const logKey = `${eventType}:${this.getEmail()}`;
    const registered = localStorage.getItem(logKey) || '';

    const logs = registered
      .split(',')
      .filter(id => id && Number(id) !== movieId)
      .slice(0, 4);

    logs.unshift(String(movieId));
    localStorage.setItem(logKey, logs.join(','));
  }

  public get(eventType: string) {
    const logKey = `${eventType}:${this.getEmail()}`;
    const registered = localStorage.getItem(logKey) || '';
    return registered.split(',').filter(id => id).slice(0, 5).map(id => Number(id));
  }
}
