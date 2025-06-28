import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
    name: string = '';
    password: string = '';
    email: string = '';

    constructor(private http: HttpClient) {}


signup() {
  const body = {
    name: this.name,
    email: this.email,
    password: this.password
  };

  this.http.post('http://localhost:7000/signup', body, { responseType: 'text' })
    .subscribe({
      next: res => alert("Signup successfully"),
      error: err => alert(err.error)
    });
}

}
