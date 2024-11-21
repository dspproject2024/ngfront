import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppartementsComponent } from './appartements.component';
import { Component } from '@angular/core';

// Mock des composants enfants
@Component({
  selector: 'app-appart-header',
  template: '<div>Mock Appart Header</div>',
})
class MockAppartHeaderComponent {}

@Component({
  selector: 'app-appart-list',
  template: '<div>Mock Appart List</div>',
})
class MockAppartListComponent {}

describe('AppartementsComponent', () => {
  let component: AppartementsComponent;
  let fixture: ComponentFixture<AppartementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppartementsComponent,
        MockAppartHeaderComponent,
        MockAppartListComponent, // Ajout des mocks pour les composants enfants
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppartementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the app-appart-header component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-appart-header')).toBeTruthy();
  });

  it('should render the app-appart-list component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-appart-list')).toBeTruthy();
  });
});
