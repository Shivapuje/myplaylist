import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FavoriteSongsListComponent } from './favorite-songs-list/favorite-songs-list.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AddNewSongComponent } from './add-new-song/add-new-song.component';
import { BeforeLoginComponent } from './before-login/before-login.component';
import { ShowSongDetailsComponent } from './show-song-details/show-song-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteSongsListComponent,
    AddNewSongComponent,
    BeforeLoginComponent,
    ShowSongDetailsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
