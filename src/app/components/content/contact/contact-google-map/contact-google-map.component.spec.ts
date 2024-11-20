import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactGoogleMapComponent } from './contact-google-map.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ContactGoogleMapComponent', () => {
  let component: ContactGoogleMapComponent;
  let fixture: ComponentFixture<ContactGoogleMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactGoogleMapComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow custom elements in the template
    }).compileComponents();

    fixture = TestBed.createComponent(ContactGoogleMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
