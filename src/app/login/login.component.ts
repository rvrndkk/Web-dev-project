import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  registerName: string = '';
  registerEmail: string = '';
  registerPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe((response) => {
      localStorage.setItem('accessToken', response.accessToken);
      this.router.navigate(['/events']);
    });
  }

  onRegister(): void {
    this.authService
      .register(this.registerName, this.registerEmail, this.registerPassword)
      .subscribe((response) => {
        localStorage.setItem('accessToken', response.accessToken);
        this.router.navigate(['/events']);
      });
  }
}