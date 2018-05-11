import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/items.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  items: Array<any>;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.listAll()
    .then((data) => {
      this.items=data;
    })
  }

}
