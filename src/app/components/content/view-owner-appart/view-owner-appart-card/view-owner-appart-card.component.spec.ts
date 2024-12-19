import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewOwnerAppartCardComponent } from './view-owner-appart-card.component';

describe('ViewOwnerAppartCardComponent', () => {
  let component: ViewOwnerAppartCardComponent;
  let fixture: ComponentFixture<ViewOwnerAppartCardComponent>;

  const mockApartment = {
    id: 1,
    name: 'Beautiful Apartment',
    description: 'A cozy apartment in the city center',
    image: 'https://example.com/image.jpg',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewOwnerAppartCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewOwnerAppartCardComponent);
    component = fixture.componentInstance;

    // Fournir un mock pour l'entrée @Input() apartment
    component.apartment = mockApartment;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the apartment image', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const imageElement = compiled.querySelector('.placeholder-image-icon') as HTMLImageElement;

    expect(imageElement).toBeTruthy(); // Vérifie que l'image est présente
    expect(imageElement.src).toContain(mockApartment.image); // Vérifie la source de l'image
  });

  it('should display the apartment name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const nameElement = compiled.querySelector('.full-name') as HTMLElement;

    expect(nameElement).toBeTruthy(); // Vérifie que l'élément est présent
    expect(nameElement.textContent).toContain(mockApartment.name); // Vérifie le contenu du nom
  });

  it('should display the apartment description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const descriptionElement = compiled.querySelector('.text1') as HTMLElement;

    expect(descriptionElement).toBeTruthy(); // Vérifie que la description est présente
    expect(descriptionElement.textContent).toContain(mockApartment.description); // Vérifie le contenu de la description
  });

  it('should display the manage button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const manageButton = compiled.querySelector('.link-one') as HTMLElement;

    expect(manageButton).toBeTruthy(); // Vérifie que le bouton est présent
    expect(manageButton.textContent?.trim()).toBe('Gérer'); // Vérifie le texte du bouton
  });
});
