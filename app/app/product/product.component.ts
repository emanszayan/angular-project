import { Component, OnInit } from '@angular/core';
import {StorageService} from 'src/app/storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public id:string;
  public product:Array<object>;
  constructor(private router: Router, private route: ActivatedRoute,private service:StorageService) {
    this.product=this.service.getallproduct();
  }


 

  
    ngOnInit() {
      this.id = this.route.snapshot.paramMap.get("id")
    }
  

}
