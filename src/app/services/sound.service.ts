import { Injectable } from '@angular/core';
import * as Howler from 'howler';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  private bipSound: Howler.Howl;

  constructor() {
    this.bipSound = new Howler.Howl({
      src: ['../../assets/sounds/notify.wav']
    });
  }

  playBip() {
    this.bipSound.play();
  }

}