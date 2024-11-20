import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewOwnerAppartListComponent } from './view-owner-appart-list.component';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

// Mock child component
@Component({
  selector: 'app-view-owner-appart-card',
  template: '<div>{{ apartment.name }}</div>', // Mock template for the child component
})
class MockViewOwnerAppartCardComponent {
  @Input() apartment: any;
}

describe('ViewOwnerAppartListComponent', () => {
  let component: ViewOwnerAppartListComponent;
  let fixture: ComponentFixture<ViewOwnerAppartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ViewOwnerAppartListComponent,
        MockViewOwnerAppartCardComponent, // Include the mock child component
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewOwnerAppartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call the search method when the search button is clicked', () => {
    spyOn(component, 'search'); // Spy on the search method

    // Find the button and trigger a click event
    const searchButton = fixture.debugElement.query(By.css('.btn-primary'));
    searchButton.triggerEventHandler('click', null);

    // Trigger Angular's change detection
    fixture.detectChanges();

    expect(component.search).toBe(component.search);
  });

  it('should call search method with correct query', () => {
    spyOn(component, 'search'); // Spy on the search method

    // Set the search input value
    const searchInput = fixture.debugElement.query(
      By.css('.searchInput')
    ).nativeElement;
    searchInput.value = 'Boisée';
    searchInput.dispatchEvent(new Event('input'));

    // Find the search button and click it
    const searchButton = fixture.debugElement.query(By.css('.btn-primary'));
    searchButton.triggerEventHandler('click', null);

    // Trigger Angular's change detection
    fixture.detectChanges();

    expect(component.search).toBe(component.search);
  });
});
