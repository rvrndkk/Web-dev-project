import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule], // Import RouterModule for <router-outlet>
  template: `
    <div class="app-container">
      <h1>Event Planner</h1>
      <nav>
        <a routerLink="/events">Events</a> |
        <a routerLink="/login">Login</a> |
        <a routerLink="/my-events">My Events</a>
      </nav>
      <router-outlet></router-outlet> <!-- Render routed components here -->
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'event-planner';
}