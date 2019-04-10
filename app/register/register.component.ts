import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { StreamService } from 'src/app/stream.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public profileForm  = new FormGroup({
    Name: new FormControl("", [ Validators.required,Validators.minLength(4)]),
    email: new FormControl("", [ Validators.required]),
    dateOfBirth:new FormControl("", [ Validators.required]),
    password: new FormControl("", [ Validators.required,Validators.minLength(8)]),
  });


  constructor(private  router: Router) { }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    localStorage.setItem(JSON.stringify(this.profileForm.value.Name),JSON.stringify(this.profileForm.value));
    // TODO: Use EventEmitter with form value
    console.log("user",JSON.parse(localStorage.getItem('userdata')));

  }
  ngOnInit() {
  }

}
