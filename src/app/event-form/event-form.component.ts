import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { Event } from '../models/event.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent implements OnInit {
  event: Event = {
    id: 0,
    title: '',
    description: '',
    date: '',
    location: '',
    organizer: { id: 0, name: '', email: '' },
    participants: [],
  };
  isEditMode: boolean = false;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const eventId = this.route.snapshot.params['id'];
    if (eventId) {
      this.isEditMode = true;
      this.eventService.getEvent(+eventId).subscribe((data) => {
        this.event = data;
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.eventService.updateEvent(this.event.id, this.event).subscribe(() => {
        this.router.navigate(['/events']);
      });
    } else {
      this.eventService.createEvent(this.event).subscribe(() => {
        this.router.navigate(['/events']);
      });
    }
  }
}