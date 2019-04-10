import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input('class') type :string ;
  @Input('href') name:string;
  @Input('value') value :string;
  constructor() { }

  ngOnInit() {
  }

}
