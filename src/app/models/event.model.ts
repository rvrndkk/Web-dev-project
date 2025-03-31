import { User } from './user.model';

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  organizer: User;
  participants: User[];
}