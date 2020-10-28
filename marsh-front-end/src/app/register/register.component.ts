import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerFormGroup = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  registerUser() {
    /*this.userService.reisterUser(this.registerFormGroup.value).subscribe((result) => {
      alert('User regiser successfully');
    })*/
  }
}
