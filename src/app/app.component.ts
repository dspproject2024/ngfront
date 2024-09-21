import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Path to your updated HTML template
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AtypikHouse';
  // Method to check if user is logged in based on localStorage token
  isLoggedIn(): boolean {
    // Replace 'token' with the actual key you use to store the token
    return !!localStorage.getItem('token');
  }
}
