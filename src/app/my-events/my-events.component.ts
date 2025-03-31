import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { Event } from '../models/event.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-events',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css'],
})
export class MyEventsComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.fetchMyEvents();
  }

  fetchMyEvents(): void {
    const userId = 1; // Replace with actual user ID from auth service
    this.eventService.getEvents().subscribe((data) => {
      this.events = data.filter(
        (event) =>
          event.organizer.id === userId ||
          event.participants.some((participant) => participant.id === userId)
      );
    });
  }

  viewEventDetails(eventId: number): void {
    this.router.navigate(['/events', eventId]);
  }
}