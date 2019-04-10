import { Component, OnInit, Input } from '@angular/core';
import { WishlistComponent } from 'src/app/header/wishlist/wishlist.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input('cart') cart :string;
  @Input('wishlist') wishlist :string;
  @Input('wish') wish :any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  logout(){
    localStorage.removeItem('userdata');
  }
  ngOnInit() {
  }
  navigateto(path: string):void {
        this.router.navigate([path]);
  }
  }
