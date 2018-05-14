import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-review-form',
  templateUrl: './user-review-form.component.html',
  styleUrls: ['./user-review-form.component.css']
})
export class UserReviewFormComponent implements OnInit {

  @Input() feedbackEnabled: boolean ;
  @Input() error: string ;
  @Input() processing: boolean ;
  @Input() review: any;

  @Output() submitdata: EventEmitter<any> = new EventEmitter;

  constructor(private userService: UserService, private router: Router) { 

    this.review= {}
  }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.submitdata.emit(this.review);
      //yo page, there was a submit action!
    }
  }
}
