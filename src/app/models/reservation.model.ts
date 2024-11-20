import { User } from './user.model';
import { Habitat } from './habitat.model';
import { Status } from './status.model';
// import { Payment } from './payment.model'; // Uncomment if a Payment model exists

export interface Reservation {
  id?: number; // Optional as it may not exist until the reservation is created
  startDate: string | Date; // Use string for ISO date or Date for object representation
  endDate: string | Date; // Use string for ISO date or Date for object representation
  totalPrice: number; // Total price for the reservation
  createdAt?: string | Date; // Optional creation timestamp (string or Date)
  updatedAt?: string | Date; // Optional last update timestamp (string or Date)
  user: User; // User details (must align with the User model)
  habitat: Habitat; // Habitat details (must align with the Habitat model)
  status: Status; // Reservation status (must align with the Status model)
  // payments?: Payment[]; // Optional list of associated payments (uncomment if Payment model is implemented)
}
