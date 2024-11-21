import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAppartComponent } from './add-appart.component';
import { Component } from '@angular/core';

// Création de composants factices pour simuler les composants enfants
@Component({
  selector: 'app-add-appart-profile-dropdown',
  template: '<div>Mock Add Appart Profile Dropdown</div>',
})
class MockAddAppartProfileDropdownComponent {}

@Component({
  selector: 'app-add-appart-header',
  template: '<div>Mock Add Appart Header</div>',
})
class MockAddAppartHeaderComponent {}

@Component({
  selector: 'app-add-appart-form',
  template: '<div>Mock Add Appart Form</div>',
})
class MockAddAppartFormComponent {}

describe('AddAppartComponent', () => {
  let component: AddAppartComponent;
  let fixture: ComponentFixture<AddAppartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AddAppartComponent,
        MockAddAppartProfileDropdownComponent,
        MockAddAppartHeaderComponent,
        MockAddAppartFormComponent,
      ], // Ajout des composants factices dans les déclarations
    }).compileComponents();

    fixture = TestBed.createComponent(AddAppartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the profile dropdown component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-add-appart-profile-dropdown')).toBeTruthy();
  });

  it('should render the header component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-add-appart-header')).toBeTruthy();
  });

  it('should render the form component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-add-appart-form')).toBeTruthy();
  });
});
