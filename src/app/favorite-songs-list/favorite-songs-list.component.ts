import { ShowSongDetailsComponent } from './../show-song-details/show-song-details.component';
import { AppComponent } from './../app.component';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShowSongDetailsComponent } from '../show-song-details/show-song-details.component';

@Component({
  selector: 'app-favorite-songs-list',
  templateUrl: './favorite-songs-list.component.html',
  styleUrls: ['./favorite-songs-list.component.css']
})
export class FavoriteSongsListComponent {

  showSongDetails: ShowSongDetailsComponent = new ShowSongDetailsComponent();
  favoriteSongs: Observable<any[]>;
  constructor(private db: AngularFireDatabase, private user: AppComponent) {
    this.favoriteSongs = db.list('favoriteSongs/' + user.afAuth.auth.currentUser.uid).valueChanges();
  }

  showSong(songDetails) {
    this.showSongDetails.setSongDetails(songDetails);
  }
}
