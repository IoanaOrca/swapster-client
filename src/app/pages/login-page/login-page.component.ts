import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  username: String;
  password: String;

  constructor(private router: Router ,private authService: AuthService) { }

  ngOnInit() {
  }

  handleSubmit(user) {
    this.error = '';
    this.feedbackEnabled = true;

    this.processing = true;
    const data = {
      username: user.username,
      password: user.password
    };
    
    this.authService.login(data)
      .then((result) => {
      this.router.navigate(['/'])
      })
      .catch((err) => {
        this.error = err.error.code; // :-)
        this.processing = false;
        this.feedbackEnabled = false;
      });
  }

}

