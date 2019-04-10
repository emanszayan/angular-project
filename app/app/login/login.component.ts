import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public uemail:string;
    public loginform  = new FormGroup({
      email: new FormControl("", [ Validators.required]),
      passsword: new FormControl("", [ Validators.required,Validators.minLength(8)]),
    });

  constructor(private router: Router, private route: ActivatedRoute) {}

  onSubmit(path: string):void {
    localStorage.setItem('userdata',JSON.stringify(this.loginform.value));
    // TODO: Use EventEmitter with form value
    console.log(this.loginform.value);
    console.log("user",JSON.parse(localStorage.getItem('userdata')));

    this.router.navigate([path]);
  }
  ngOnInit() {
  }
  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
