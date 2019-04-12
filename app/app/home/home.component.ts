import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { StorageServiceModule } from 'ngx-webstorage-service';
import {StorageService} from 'src/app/storage.service';

import { Product } from 'src/app/product.entity';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public product:Array<object>;
  public cartn:number=0;
  public wishlist:number=0;
  public nwishlist:number;
  public name:Array<string>;
  public price:Array<number>;

	private products: Product[];
  constructor(private router: Router, private route: ActivatedRoute,private service:StorageService) {
    this.product=this.service.findAll();
  }

  ngOnInit() {
		this.products = this.service.findAll();
	}
  
  addcart(path:string,id:string): void {
    this.router.navigate([path, id]);
    this.service.findAll();
    this.cartn++;
    localStorage.setItem('cart',JSON.stringify(this.cartn));
    // console.log(this.cartn);

  }
  getcount(){
    // return this.cart;
return localStorage.getItem('cart');
  }
  wish(name:string,price:number): any {
    // this.router.navigate([path]);
    // this.service.getallproduct();
  // list=this.nwishl
  this.wishlist++;

  localStorage.setItem('wishlist',JSON.stringify(this.wishlist));
    this.name[this.wishlist]=name;
      this.price[this.wishlist]=price;
    // console.log(this.nwishlist);
    return localStorage.getItem('wishlist');


  }
}
