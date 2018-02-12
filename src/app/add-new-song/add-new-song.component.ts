import { Observable } from 'rxjs/Observable';
import { AppComponent } from './../app.component';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireList } from 'angularfire2/database/interfaces';

declare var $: any;

@Component({
  selector: 'app-add-new-song',
  templateUrl: './add-new-song.component.html',
  styleUrls: ['./add-new-song.component.css']
})
export class AddNewSongComponent implements OnInit {
  currentUserSongsRef: AngularFireList<any>;
  allSongsRef: AngularFireList<any>;

  constructor(public db: AngularFireDatabase, public app: AppComponent) {

  }

  ngOnInit() {
    const that = this;
    $(document).ready(function () {
      $('.ui.dropdown').dropdown();
      $('#addSongForm').form({
        fields: {
          songTitle: 'empty',
          genre: 'empty',
          artist: 'empty',
          album: 'empty',
          link: ['empty', 'url'],
          language: 'empty'
        },
        onSuccess: function () {
          $('#addSongForm').addClass('loading');
          const values = $('#addSongForm').form('get values');
          that.addSong(values);
        }
      });
    });
  }

  closeModal() {
    $('#addNewSongModal').modal('hide');
  }
  addSong(values) {
    this.currentUserSongsRef = this.db.list('favoriteSongs/' + this.app.afAuth.auth.currentUser.uid);
    this.allSongsRef = this.db.list('allSongs');
    this.currentUserSongsRef.push(values);
    this.allSongsRef.push(values);
    $('#addSongForm').removeClass('loading');
    $('#addNewSongModal').modal('hide');
  }

}
