import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/items.service';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.css']
})
export class UserRequestsComponent implements OnInit {

  requestError:String;
  items: any;
  id:String;


  constructor( private itemService: ItemService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      this.userService.getItems(id)
      .then((data) => {
       this.items=data;
      })
      .catch((err) => {
       console.log(err);
      });
    })
  }

  handleAcceptClick(item){
    // item.sold=true;
    this.requestError = '';
    this.itemService.sellItem(item._id)
    .then(()=>{
      this.router.navigate(['profile/',item.owner]);
    })
    .catch(err => {
      this.requestError = err.error.code || 'unexpected';
    })
  }
  }
 

