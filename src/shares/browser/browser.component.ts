import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/authService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})
export class BrowserComponent implements OnInit {
  
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    
  }

}