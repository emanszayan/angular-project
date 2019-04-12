import { Component, OnInit } from '@angular/core';
import {StorageService} from 'src/app/storage.service';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/product.entity';
// port { Item } from 'src/app/item.entity';
import {Item} from 'src/app/item.entity';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
	private items: Item[] = [];
	private total: number = 0;
public cart:Array<any>;
public name:any;
	product: any;
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private productService: StorageService,
	) { this.product=this.productService.findAll(); }

	ngOnInit() {}
	// 	this.activatedRoute.params.subscribe(params => {
  //     var id = params['id'];
  //     console.log("ee",id);
	// 		if (id) {
	// 			var item: Item = {
	// 				product: this.productService.find(id),
	// 				quantity: 1
	// 			};
	// 			if (localStorage.getItem('cart') == null) {
	// 				let cart: any = [];
	// 				cart.push(JSON.stringify(item));
	// 				localStorage.setItem('cart', JSON.stringify(cart));
	// 			} else {
	// 				let cart: any = JSON.parse(localStorage.getItem('cart'));
	// 				let index: number = -1;
	// 				for (var i = 0; i < cart.length; i++) {
  //                   let item: Item = JSON.parse(cart[i]);
  //           // console.log("uu",item.products);
	// 					if (item.product.ProductId == id) {

	// 						index = i;
	// 						console.log("ee1",i);

	// 						break;
	// 					}
	// 				}
	// 				if (index == -1) {
	// 					console.log("ewe",localStorage.getItem('cart'));
	// 				let cart: any = [];
	// 				// let cart:any=JSON.parse(localStorage.getItem('cart'));
	// 					cart.push(JSON.stringify(item));
	// 					localStorage.setItem('cart', JSON.stringify(cart));
	// 				} else {
	// 					let item: Item = JSON.parse(cart[index]);
	// 					item.quantity += 1;
	// 					cart[index] = JSON.stringify(item);
	// 					localStorage.setItem("cart", JSON.stringify(cart));
	// 				}
	// 			}
	// 			this.loadCart();
	// 		} else {
	// 			this.loadCart();
	// 		}
	// 	});
	// }

	// loadCart(): void {
	// 	this.total = 0;
	// 	this.items = [];
	// 	let cart = JSON.parse(localStorage.getItem('cart'));
	// 	for (var i = 0; i < cart.length; i++) {
	// 		let item = JSON.parse(cart[i]);
	// 		this.items.push({
	// 			product: item.product,
	// 			quantity: item.quantity
	// 		});
	// 		this.total += item.product.Price * item.quantity;
	// 	}
	// }

	// remove(id: string): void {
	// 	let cart: any = JSON.parse(localStorage.getItem('cart'));
	// 	let index: number = -1;
	// 	for (var i = 0; i < cart.length; i++) {
	// 		let item: Item = JSON.parse(cart[i]);
	// 		if (item.product.ProductId == id) {
	// 			cart.splice(i, 1);
	// 			break;
	// 		}
	// 	}
	// 	localStorage.setItem("cart", JSON.stringify(cart));
	// 	this.loadCart();
	// }

	// gotohome(path:string): void {
  //   this.router.navigate([path]);
	// }
getwish(){
	this.name=localStorage.getItem('namepro');

}
}
