import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewOwnerAppartComponent } from './view-owner-appart.component';
import { Component } from '@angular/core';

// Mock child components
@Component({
  selector: 'app-view-owner-appart-profile-menu',
  template: '<div>Profile Menu Component</div>',
})
class MockViewOwnerAppartProfileMenuComponent {}

@Component({
  selector: 'app-view-owner-appart-list',
  template: '<div>Owner Appart List Component</div>',
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
        MockViewOwnerAppartListComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewOwnerAppartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the profile menu component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('app-view-owner-appart-profile-menu')
    ).toBeTruthy();
  });

  it('should render the header with correct text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const headerText = compiled.querySelector(
      '.short-heading-here'
    )?.textContent;
    const descriptionText =
      compiled.querySelector('.lorem-ipsum-dolor')?.textContent;

    expect(headerText).toContain('Mes locations');
    expect(descriptionText).toContain(
      'Gérez vos appartements de manière simple et efficace'
    );
  });

  it('should render the owner appart list component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-view-owner-appart-list')).toBeTruthy();
  });
});
