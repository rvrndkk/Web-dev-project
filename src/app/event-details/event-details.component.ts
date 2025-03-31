import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { AuthService } from '../services/auth.service';
import { Event } from '../models/event.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: Event = {
    id: 0,
    title: '',
    description: '',
    date: '',
    location: '',
    organizer: { id: 0, name: '', email: '' },
    participants: [],
  };
  isOrganizer: boolean = false;
  isParticipant: boolean = false;
  isAuthenticated: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const eventId = +this.route.snapshot.params['id'];
    this.fetchEventDetails(eventId);
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  fetchEventDetails(eventId: number): void {
    this.eventService.getEvent(eventId).subscribe((data) => {
      this.event = data;
      this.checkUserRole();
    });
  }

  checkUserRole(): void {
    const userId = 1; // Replace with actual user ID from auth service
    this.isOrganizer = this.event.organizer.id === userId;
    this.isParticipant = this.event.participants.some(
      (participant) => participant.id === userId
    );
  }

  editEvent(): void {
    this.router.navigate(['/events', this.event.id, 'edit']);
  }

  deleteEvent(): void {
    this.eventService.deleteEvent(this.event.id).subscribe(() => {
      this.router.navigate(['/events']);
    });
  }

  registerForEvent(): void {
    const userId = 1; // Replace with actual user ID from auth service
    this.eventService.registerForEvent(this.event.id, userId).subscribe(() => {
      this.fetchEventDetails(this.event.id); // Refresh event details
    });
  }
}