import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MentionLegalesComponent } from './mention-legales.component';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MentionLegalesComponent', () => {
  let component: MentionLegalesComponent;
  let fixture: ComponentFixture<MentionLegalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MentionLegalesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow custom elements like <app-content>
    }).compileComponents();

    fixture = TestBed.createComponent(MentionLegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the MentionLegalesComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render the app-content component', () => {
    const contentElement = fixture.debugElement.query(By.css('app-content'));
    expect(contentElement).toBeTruthy();
  });
});
