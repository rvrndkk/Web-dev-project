import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { AuthService } from '../services/auth.service';
import { Event } from '../models/event.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events: Event[] = [];
  searchQuery: string = '';
  isAuthenticated: boolean = false;

  constructor(
    private eventService: EventService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchEvents();
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  fetchEvents(): void {
    this.eventService.getEvents().subscribe((data) => {
      this.events = data;
    });
  }

  get filteredEvents(): Event[] {
    return this.events.filter((event) =>
      event.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  viewEventDetails(eventId: number): void {
    this.router.navigate(['/events', eventId]);
  }

  navigateToCreateEvent(): void {
    this.router.navigate(['/events/new']);
  }

  registerForEvent(eventId: number): void {
    const userId = 1; // Replace with actual user ID from auth service
    this.eventService.registerForEvent(eventId, userId).subscribe(() => {
      alert('Registered for event successfully!');
    });
  }
}