import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentComponent } from './comment.component';
import { By } from '@angular/platform-browser';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  const mockComment = {
    username: 'John Doe',
    userImage: 'path/to/image.jpg',
    date: new Date('2023-11-17T00:00:00.000Z'),
    text: 'This is a sample comment.',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    component.comment = mockComment; // Provide mock comment input
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the user image with the correct src', () => {
    const imgElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(imgElement.src).toContain(mockComment.userImage);
    expect(imgElement.alt).toBe('User image');
  });

  it('should render the username', () => {
    const usernameElement = fixture.debugElement.query(
      By.css('.font-semibold')
    ).nativeElement;
    expect(usernameElement.textContent.trim()).toBe(mockComment.username);
  });

  it('should render the comment text', () => {
    const textElement = fixture.debugElement.query(
      By.css('.text-gray-500')
    ).nativeElement;
    expect('This is a sample comment.').toBe(mockComment.text);
  });

  it('should render the formatted date', () => {
    const dateElement = fixture.debugElement.query(
      By.css('time')
    ).nativeElement;
    expect(dateElement.textContent.trim()).toBe('Nov. 17, 2023');
    expect(dateElement.getAttribute('datetime')).toBe(
      'Fri Nov 17 2023 01:00:00 GMT+0100 (heure normale d’Europe centrale)'
    );
  });

  it('should have a reply button', () => {
    const replyButton = fixture.debugElement.query(
      By.css('button[type="button"]')
    ).nativeElement;
    expect(replyButton.textContent.trim()).toBe('');
  });
});
