import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  standalone:false
})
export class HomeComponent {
  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // check JWT in local storage
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
