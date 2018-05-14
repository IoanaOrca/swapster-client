import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/items.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail-page.component.html',
  styleUrls: ['./item-detail-page.component.css']
})
export class ItemDetailPageComponent implements OnInit {

  currentUser:Object;
  item:Object;
  idItem: string;

  // notFound = false;
  requestError:string;

  constructor(
    private itemService: ItemService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute, 
    private router: Router
  ) { }

  ngOnInit() {
    this.currentUser=this.authService.getUser()
    this.activatedRoute.params.subscribe((params) => {
      this.idItem = params.id;
      this.itemService.getOne(this.idItem)
      .then((data) => {
        this.item = data;
      })
      .catch(err => {
        console.log(err);
        // @todo if(err.error.code === 'not-found') { this.notFound = true; }
      })
    });
  }

  handleDeleteClick(){
    this.itemService.deleteOne(this.idItem)
    .then(()=>{
      this.router.navigate(['/']);
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleRequestClick(){
    this.requestError = '';
    this.itemService.requestItem(this.idItem)
    .then(()=>{
      this.router.navigate(['/']);
    })
    .catch(err => {
      this.requestError = err.error.code || 'unexpected';
    })
  }

}
