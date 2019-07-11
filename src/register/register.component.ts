import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/authService';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerUser: FormGroup;

  maxLength: number = 32;
  maxLengthDescription: number = 200;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.getRegisterUser();
  
  }

  getRegisterUser(){
    this.registerUser = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(this.maxLength)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(this.maxLength)]),
      email: new FormControl('', Validators.required),
      nameProject: new FormControl('', Validators.required),
      description : new FormControl('', [Validators.maxLength(this.maxLengthDescription)]) 
    })
  }
 
 /* registerUser(event) {
    event.preventDefault()
    const errors = []
    const target = event.target
    const firstname = target.querySelector('#firstname').value
    const lastname = target.querySelector('#lastname').value
    const email = target.querySelector('#email').value
    const text = target.querySelector('#text').value


    if(errors.length === 0) {
        this.auth.registerUser(firstname, lastname, email, text).subscribe(data => {
          console.log(data)
          if(data.success) {
            console.log("bravo")
          }
        })
      }

  }*/

}