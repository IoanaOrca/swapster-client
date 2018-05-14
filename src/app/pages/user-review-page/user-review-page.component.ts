import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-user-review-page',
  templateUrl: './user-review-page.component.html',
  styleUrls: ['./user-review-page.component.css']
})
export class UserReviewPageComponent implements OnInit {


  feedbackEnabled: boolean;
  error : boolean;
  processing : boolean;
  userId: any;


  constructor(private userService: UserService, 
    private router: Router,
    private activatedRoute: ActivatedRoute, ) { }

  ngOnInit() {
  }

  handleSubmitForm(review) {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params.id;
      this.userService.reviews(review,this.userId)
        .then((result) => {
        this.router.navigate(['/profile',result._id]);
        })
        .catch((err) => {
          this.error = err.error.code;
          this.processing = false;
          this.feedbackEnabled = false;
        });
    });
  }
}

