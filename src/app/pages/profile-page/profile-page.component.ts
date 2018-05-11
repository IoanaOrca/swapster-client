import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  user:Object;
  items:Array<Object>
  idUser: string;
  
  constructor(private userService: UserService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.idUser = params.id;
      this.userService.getOnePlusItems(this.idUser)
      .then((data) => {
          this.user = data[0];
          this.items = data[1];
      });
    });

  }

}
