import { Component } from '@angular/core';

@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.css'],
})
export class CommentsFormComponent {
  commentText: string = ''; // Stocke le texte du commentaire

  onSubmit() {
    if (this.commentText.trim()) {
      console.log('Form submitted!', this.commentText);
    } else {
      console.log('Comment is required!');
    }
  }
}
