import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/authService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser(event) {
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

  }

}