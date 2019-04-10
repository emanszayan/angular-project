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
  public name:Array<string>;
  public price:Array<number>;

  constructor(private router: Router, private route: ActivatedRoute,private service:StorageService) {
    this.product=this.service.getallproduct();
  }


  ngOnInit() {
  }
  addcart(): void {
    // this.router.navigate([path, id]);
    // this.service.getallproduct();
    this.cart++;
    console.log(this.cart);
  }
  getcount(){
    return this.cart;
  }
  wish(name:string,price:number): any {
    // this.router.navigate([path]);
    // this.service.getallproduct();
  // list=this.nwishl
  this.wishlist++;
    this.name[this.wishlist]=name;
      this.price[this.wishlist]=price;
    console.log(this.nwishlist);
    return this.wishlist;


  }
}
