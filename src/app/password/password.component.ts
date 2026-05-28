import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  @Output() success = new EventEmitter<void>();
  passwordInput = '';
  error = false;

  verifyPassword() {
    if (this.passwordInput === '28') {
      this.success.emit();
    } else {
      this.error = true;
      setTimeout(() => this.error = false, 2000);
    }
  }
}