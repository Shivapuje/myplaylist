import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-song-details',
  templateUrl: './show-song-details.component.html',
  styleUrls: ['./show-song-details.component.css']
})

export class ShowSongDetailsComponent implements OnInit {

  song: any;
  constructor() {
    this.song = {
      songTitle: '',
      artist: '',
      album: '',
      genre: '',
      url: ''
    };

  }

  ngOnInit() {
  }

  setSongDetails(songDetails): void {
    console.log(songDetails);
    this.song = songDetails;
  }

  playSong(url) {
    console.log(url);
  }
}
