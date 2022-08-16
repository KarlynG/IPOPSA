import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  signIn() {
    this.authService.singIn(this.user).subscribe(
      (res) => {
        console.log(res); //token
        localStorage.setItem('token', res);
        this.router.navigate(['/trailer']);
      },
      (err) => console.log(err)
    );
  }
}
