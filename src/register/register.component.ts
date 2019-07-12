import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/authService';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  
  registerUser: FormGroup;
  submitted = false;
  maxLength: number = 32;
  maxLengthDescription: number = 200;
  maxLengthNameProject: number = 32;
  countParticipant: number = 0;
  maxParticipant: number = 4;
  colsTextarea: number = 38;
  rowsTextarea: number = 5;
  tabParticipant = [];

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.getRegisterUser();
  }


  //create of form
  getRegisterUser(){
    this.registerUser = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(this.maxLength)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(this.maxLength)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      nameProject: new FormControl('', [Validators.required, Validators.maxLength(this.maxLengthNameProject)]),
      description: new FormControl('', [Validators.maxLength(this.maxLengthDescription)]), 
      participant: new FormArray([])
    })
  }

  /*getSetValue(){
    this.registerUser.setValue({
      participant: []
    })
  }*/


  //count who add four participant max
  onAddParticipant(){
    if(this.countParticipant < this.maxParticipant){
      this.countParticipant++;
      const control=new FormControl(null,Validators.required);
      (<FormArray>this.registerUser.get('participant')).push(control);
    }
  }
 
  //delete a participant
  onDeleteParticipant(tabParticipant: [], index: number ){
   
    tabParticipant.splice(index, 1);
    this.countParticipant--;
  }



  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerUser.invalid) {
        return;
    }


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