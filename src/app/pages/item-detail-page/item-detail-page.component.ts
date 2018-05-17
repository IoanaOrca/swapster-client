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

  currentUser:any;
  item:any;
  idItem: string;
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
        this.item.itemNotBooked = false;
        if (this.item.applicants.indexOf(this.currentUser._id)===-1) {
          this.item.itemNotBooked=true;
        } 
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
      this.router.navigate(['profile/',this.item.owner]);
    })
    .catch(err => {
      console.log(err);
    })
  }

  handleRequestClick(){
    this.requestError = '';
    this.itemService.requestItem(this.idItem)
    .then(()=>{
     this.router.navigate(['profile/',this.currentUser._id]);
    })
    .catch(err => {
      this.requestError = err.error || 'unexpected';
    })
  }
  handleReviewClick(id){
    this.itemService.deleteOne(id)
    .then(()=>{
      this.router.navigate(['profile/',this.item.owner,'reviews']);
    })
    .catch(err => {
      console.log(err);
    })
  }
}
