import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-before-login',
  templateUrl: './before-login.component.html',
  styleUrls: ['./before-login.component.css']
})
export class BeforeLoginComponent implements OnInit {

  constructor(public auth: AppComponent) { }

  login() {
    this.auth.login();
  }
  ngOnInit() {
  }

}
