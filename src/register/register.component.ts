import { Component, OnInit } from '@angular/core';
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

  constructor(private router: Router) { }
  
  //Initialisation of form
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
}