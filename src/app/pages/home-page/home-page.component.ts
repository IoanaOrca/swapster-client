import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/items.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  currentUser:Object;
  items: Array<any>;
  terms:String;
  constructor(private itemService: ItemService,
  private authService: AuthService) {
    this.terms="";
   }

  private search(terms?: String) {
    this.itemService.listAll(terms)
    .then((data) => {
      this.items=data;
    })
  }

  ngOnInit() {
    this.currentUser=this.authService.getUser()
    this.search(this.terms);
  }

  handleFilterClick(){
    this.search(this.terms);
  }

}
