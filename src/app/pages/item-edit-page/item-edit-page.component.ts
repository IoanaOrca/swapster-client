import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/items.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-edit-page',
  templateUrl: './item-edit-page.component.html',
  styleUrls: ['./item-edit-page.component.css']
})
export class ItemEditPageComponent implements OnInit {


  error: string;
  processing: boolean;
  feedbackEnabled: boolean;
  item: any;

  constructor(private itemService: ItemService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id

      this.itemService.getOne(id)
      .then((data) => {
        this.item = data;
      })
      .catch((err) => {
        console.log(err);
      });
    });
  }

  handleSubmitForm(item) {
    this.itemService.update(item)
    .then((data)=> {
      const id=item.owner;
          this.router.navigate([`profile/${id}`]);
    })
    .catch(err => {
      this.error = err.error.code;
      this.processing = false;
      this.feedbackEnabled = false;
    })
  }
}
