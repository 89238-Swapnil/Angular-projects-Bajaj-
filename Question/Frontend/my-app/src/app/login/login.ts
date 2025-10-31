import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  standalone:false,
    styleUrl:'./login.css',

})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post<{ token: string }>('http://localhost:3000/api/auth/login', {
      email: this.email,
      password: this.password
      
    }
  
  ).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token); // store JWT
        alert('Login successful!');
this.router.navigate(['/topics']); // redirect to quiz page after login
      },
      error: (err) => alert(err.error.message || 'Invalid email or password')
    });
  }
}
