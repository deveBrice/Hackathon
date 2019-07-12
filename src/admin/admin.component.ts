import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/authService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    
  }

}