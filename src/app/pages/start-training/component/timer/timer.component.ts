import { Component, Input } from '@angular/core';
import { SoundService } from 'src/app/services/sound.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  title: string = 'Terminei as Repetiçoes';
  time: number = 15;
  status: string = 'repetitions';
  intervalId: any;

  constructor(
    private soundService: SoundService
  ) { }

  startTimer() {
    this.title = 'Descanso';
    this.intervalId = setInterval(() => {
      if (this.time > 0) {
        this.time--;
        if (this.time === 10 || this.time <= 3) {
          this.soundService.playBip();
        }
      } else {
        clearInterval(this.intervalId);
        this.title = 'Terminou as Repetições';
        this.time = 15;
      }
    }, 1000);
  }

}
