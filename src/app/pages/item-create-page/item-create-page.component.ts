import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/items.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-item-create-page',
  templateUrl: './item-create-page.component.html',
  styleUrls: ['./item-create-page.component.css']
})
export class ItemCreatePageComponent implements OnInit {

  feedbackEnabled: boolean;
  error : boolean;
  processing : boolean;

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit() {
  }

  handleSubmitForm(item) {
    this.itemService.add(item)
        .then((result) => {
         this.router.navigate(['/']);
        })
        .catch((err) => {
          this.error = err.error.code;
          this.processing = false;
          this.feedbackEnabled = false;
        });
  }

}
