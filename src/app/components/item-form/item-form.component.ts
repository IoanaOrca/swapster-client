import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { ItemService } from '../../services/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})

export class ItemFormComponent implements OnInit {

  @Input() feedbackEnabled: boolean ;
  @Input() error: string ;
  @Input() processing: boolean ;
  @Input() item: any;

  @Output() submitdata: EventEmitter<any> = new EventEmitter;

  constructor(private itemService: ItemService, private router: Router) {
    this.item= {}
   }

  ngOnInit() {
  }

//service to put in the page to contain the movie form --> normall the pages talk with the services
  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.submitdata.emit(this.item);
      //yo page, there was a submit action!
    }
  }

}