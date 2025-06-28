import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   email: string = '';
  password: string = '';

  constructor(private http: HttpClient) {}

  login() {
  if (!this.email || !this.password) {
    alert('Please enter email and password.');
    return;
  }

  const body = {
    email: this.email,
    password: this.password
  };

  this.http.post('http://localhost:7000/login', body, {
    responseType: 'text' as 'text'
  }).subscribe({
    next: res => alert("Login Successful"),
    error: err => alert(err.error)
  });
}

}
