import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LockedComponent } from './locked/locked.component';
import { PasswordComponent } from './password/password.component';
import { BirthdayComponent } from './birthday/birthday.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LockedComponent, PasswordComponent, BirthdayComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  targetDate!: Date;
  currentMode: 'locked' | 'password' | 'birthday' = 'locked';
  isUnlocked = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    this.targetDate = new Date(currentYear, 4, 28); // 28 de mayo
    this.checkDate();
  }

  checkDate() {
    const now = new Date();
    if (now >= this.targetDate) {
      this.currentMode = 'locked';
    } else {
      this.currentMode = 'password';
    }
    this.cdr.detectChanges();
  }

  onPasswordSuccess() {
    this.currentMode = 'locked';
    this.cdr.detectChanges();
  }
}