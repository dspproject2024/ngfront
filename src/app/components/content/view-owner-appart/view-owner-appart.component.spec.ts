import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewOwnerAppartComponent } from './view-owner-appart.component';
import { Component } from '@angular/core';

// Mock des composants enfants
@Component({
  selector: 'app-view-owner-appart-profile-menu',
  template: '<div>Mock Profile Menu Component</div>',
})
class MockViewOwnerAppartProfileMenuComponent {}

@Component({
  selector: 'app-view-owner-appart-list',
  template: '<div>Mock Owner Appart List Component</div>',
})
class MockViewOwnerAppartListComponent {}

describe('ViewOwnerAppartComponent', () => {
  let component: ViewOwnerAppartComponent;
  let fixture: ComponentFixture<ViewOwnerAppartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ViewOwnerAppartComponent,
        MockViewOwnerAppartProfileMenuComponent,
        MockViewOwnerAppartListComponent, // Ajout des composants factices dans les déclarations
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewOwnerAppartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the profile menu component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const profileMenu = compiled.querySelector(
      'app-view-owner-appart-profile-menu'
    );
    expect(profileMenu).toBeTruthy();
  });

  it('should render the header with correct text', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const headerText = compiled.querySelector(
      '.short-heading-here'
    )?.textContent?.trim(); // Suppression des espaces pour une comparaison précise
    const descriptionText = compiled
      .querySelector('.lorem-ipsum-dolor')
      ?.textContent?.trim();

    expect(headerText).toBe('Mes locations');
    expect(descriptionText).toBe(
      'Gérez vos appartements de manière simple et efficace'
    );
  });

  it('should render the owner appart list component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const ownerAppartList = compiled.querySelector('app-view-owner-appart-list');
    expect(ownerAppartList).toBeTruthy();
  });
});
