import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSongDetailsComponent } from './show-song-details.component';

describe('ShowSongDetailsComponent', () => {
  let component: ShowSongDetailsComponent;
  let fixture: ComponentFixture<ShowSongDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSongDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSongDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
