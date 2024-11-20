import { Component } from '@angular/core';

@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrl: './comments-form.component.css',
})
export class CommentsFormComponent {
  onSubmit() {
    console.log('Form submitted!');
  }
}
