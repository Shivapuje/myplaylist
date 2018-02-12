import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireList } from 'angularfire2/database/interfaces';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {

  constructor(public afAuth: AngularFireAuth) {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  addSongModal() {
    $('#addNewSongModal').modal('show');
  }

  toggleSidebar() {
    $('#mainSidebar')
      .sidebar('setting', 'transition', 'overlay')
      .sidebar('toggle');
  }

  ngAfterViewInit() {
    $('#addNewSongModal').modal({
      closable: false
    });
  }

}
