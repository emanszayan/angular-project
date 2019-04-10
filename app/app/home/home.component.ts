import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { StorageServiceModule } from 'ngx-webstorage-service';
import {StorageService} from 'src/app/storage.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public product:Array<object>;
  public cart:number=0;
  public wishlist:number=0;
  public nwishlist:number;
  constructor(private router: Router, private route: ActivatedRoute,private service:StorageService) {
    this.product=this.service.getallproduct();
  }


  ngOnInit() {
  }
  addcart(path: string,id:string): void {
    this.router.navigate([path, id]);
    // this.service.getallproduct();
    this.cart=this.cart+1;

  }
  wish(path: string): any {
    this.router.navigate([path]);
    // this.service.getallproduct();
    this.nwishlist=this.nwishlist+1;
    console.log(this.nwishlist);
    return this.wishlist;


  }
}
