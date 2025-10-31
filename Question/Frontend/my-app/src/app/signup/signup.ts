import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.html',
  standalone:false,
    styleUrl:'./signup.css',

})
export class SignupComponent {
  name = '';
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  signup() {
      console.log('Signup payload:', {
    name: this.name,
    email: this.email,
    password: this.password
  });
    this.http.post('http://localhost:3000/api/auth/signup', {
      name: this.name,
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        alert('Signup successful!');
        this.router.navigate(['/login']);
      },
      error: (err) => alert(err.error.message || 'Signup failed')
    });
  }
}
