import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Mock child components
@Component({
  selector: 'app-contact-header',
  template: '<div>Mock Contact Header</div>',
})
class MockContactHeaderComponent {}

@Component({
  selector: 'app-contact-form',
  template: '<div>Mock Contact Form</div>',
})
class MockContactFormComponent {}

@Component({
  selector: 'app-contact-info',
  template: '<div>Mock Contact Info</div>',
})
class MockContactInfoComponent {}

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ContactComponent,
        MockContactHeaderComponent, // Mock child components
        MockContactFormComponent,
        MockContactInfoComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow unresolved elements in the template
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain <app-contact-header>', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-contact-header')).toBeTruthy();
  });

  it('should contain <app-contact-form>', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-contact-form')).toBeTruthy();
  });

  it('should contain <app-contact-info>', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-contact-info')).toBeTruthy();
  });
});
