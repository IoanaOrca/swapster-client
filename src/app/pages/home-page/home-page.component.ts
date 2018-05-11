import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/items.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  items: Array<any>;

  constructor(private itemService: ItemService) { }

  private search(terms?: String) {
    this.itemService.listAll(terms)
    .then((data) => {
      this.items=data;
    })
  }

  ngOnInit() {
    this.search('cycle');
  }

  handleFilterClick(){
    //this.search(this.terms);
  }

}
