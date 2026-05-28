import { Component, Input, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-locked',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locked.component.html',
  styleUrls: ['./locked.component.css']
})
export class LockedComponent implements OnInit, OnDestroy {
  @Input() targetDate!: Date;
  days = 0; hours = 0; minutes = 0; seconds = 0;
  private timer: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.updateCountdown();
    this.timer = setInterval(() => this.updateCountdown(), 1000);
  }

  private updateCountdown() {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;
    if (distance <= 0) {
      // Forzar recarga de la app principal (lo manejará AppComponent)
      this.days = this.hours = this.minutes = this.seconds = 0;
    } else {
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (86400000)) / 3600000);
      this.minutes = Math.floor((distance % 3600000) / 60000);
      this.seconds = Math.floor((distance % 60000) / 1000);
    }
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }
}