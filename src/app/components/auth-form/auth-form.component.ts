import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})

export class AuthFormComponent implements OnInit {

  @Input() label: String;
  @Input() processing: Boolean;

  @Output() submitdata: EventEmitter<any> = new EventEmitter;

  feedbackEnabled: boolean ;
  error: string ;
  user: any;

  constructor(private authService: AuthService, private router: Router) {
    this.user= {}
  }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.submitdata.emit(this.user);
    }
  }

}

