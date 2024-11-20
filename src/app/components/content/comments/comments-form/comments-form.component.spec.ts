import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CommentsFormComponent } from './comments-form.component';

describe('CommentsFormComponent', () => {
  let component: CommentsFormComponent;
  let fixture: ComponentFixture<CommentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentsFormComponent],
      imports: [FormsModule], // Import FormsModule for template-driven forms
    }).compileComponents();

    fixture = TestBed.createComponent(CommentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the form', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('form')).toBeTruthy();
    expect(compiled.querySelector('textarea#comment')).toBeTruthy();
    expect(compiled.querySelector('button[type="submit"]')).toBeTruthy();
    expect(compiled.querySelector('button')?.textContent).toContain(
      'Post comment'
    );
  });

  it('should require the comment field', () => {
    const textarea = fixture.nativeElement.querySelector('textarea#comment');
    expect(textarea).toBeTruthy();
    expect(textarea.required).toBeTrue();
  });

  it('should submit the form', () => {
    spyOn(component, 'onSubmit'); // Spy on the onSubmit method if defined in the component logic

    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    fixture.detectChanges();
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
