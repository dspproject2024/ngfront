import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewOwnerAppartCardComponent } from './view-owner-appart-card.component';
import { By } from '@angular/platform-browser';

describe('ViewOwnerAppartCardComponent', () => {
  let component: ViewOwnerAppartCardComponent;
  let fixture: ComponentFixture<ViewOwnerAppartCardComponent>;

  const mockApartment = {
    name: 'Luxury Villa',
    description: 'A beautiful villa with modern amenities.',
    image: 'path/to/image.jpg',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewOwnerAppartCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewOwnerAppartCardComponent);
    component = fixture.componentInstance;
    component.apartment = mockApartment; // Set the apartment input
    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the apartment details correctly', () => {
    const nameElement = fixture.debugElement.query(
      By.css('.full-name')
    ).nativeElement;
    const descriptionElement = fixture.debugElement.query(
      By.css('.text1')
    ).nativeElement;
    const imageElement = fixture.debugElement.query(
      By.css('.placeholder-image-icon')
    ).nativeElement;

    expect(nameElement.textContent).toBe(mockApartment.name);
    expect(descriptionElement.textContent).toBe(mockApartment.description);
    expect(imageElement.src).toContain(mockApartment.image);
  });

  it('should call manageApartment when "Gérer" is clicked', () => {
    spyOn(component, 'manageApartment');
    const manageButton = fixture.debugElement.query(
      By.css('.link-one')
    ).nativeElement;

    // Simulate the click event
    manageButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.manageApartment).toHaveBeenCalled();
  });
});
