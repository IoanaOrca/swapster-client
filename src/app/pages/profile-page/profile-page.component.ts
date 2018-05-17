import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  currentUser:Object;
  user:Object;
  items:Array<Object>;
  itemsReceived:any;
  itemsBooked:any;
  idUser: string;
  
  constructor(private userService: UserService
    ,private activatedRoute: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit() {
    this.currentUser=this.authService.getUser()
    this.activatedRoute.params.subscribe((params) => {
      this.idUser = params.id;
      this.userService.getOnePlusItems(this.idUser)
      .then((data) => {
          this.user = data[0];
          this.items = data[1];
          this.itemsReceived = data[2];
          this.itemsBooked = data[3];
      })
      .catch((err) => {
        console.log(err);
       });
    });
   }
  }

 

