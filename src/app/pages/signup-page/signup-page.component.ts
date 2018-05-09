import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  processing=false;
  error: String;

  constructor(private router: Router ,private authService: AuthService) { }

  ngOnInit() {
  }

  handleSubmit(user) {
    this.processing=true;
    this.authService.signup(user)
      .then((result) => {
        this.router.navigate(['/'])
      })
      .catch((err) => {
        this.processing=false;
        this.error = err.error.code || 'unexpected';
      });
  }
}