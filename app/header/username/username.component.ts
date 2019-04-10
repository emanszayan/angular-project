import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {
@Input('fn') fn:string;
  constructor() { }
onclick(){
  localStorage.removeItem('userdata');
}
  ngOnInit() {
  }

}
