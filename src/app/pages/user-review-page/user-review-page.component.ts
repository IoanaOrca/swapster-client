import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-review-page',
  templateUrl: './user-review-page.component.html',
  styleUrls: ['./user-review-page.component.css']
})
export class UserReviewPageComponent implements OnInit {


  feedbackEnabled: boolean;
  error : boolean;
  processing : boolean;
  user: any;


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  handleSubmitForm(review) {
    this.userService.reviews(review)
        .then((result) => {
        this.router.navigate(['/profile',this.user._id]);
        })
        .catch((err) => {
          this.error = err.error.code;
          this.processing = false;
          this.feedbackEnabled = false;
        });
  }
}

