import { ComponentFixture, TestBed } from '@angular/core/testing';
//import { CatHeaderComponent } from './cat-header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CatHeaderComponent } from '../cat-header/cat-header.component';

describe('CatHeaderComponent', () => {
  let component: CatHeaderComponent;
  let fixture: ComponentFixture<CatHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatHeaderComponent], // Declare the component
      imports: [RouterTestingModule], // Import RouterTestingModule to handle routerLink
    }).compileComponents(); // Compile the component and its template

    fixture = TestBed.createComponent(CatHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verify component creation
  });

  it('should display the correct tagline', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.subheading')?.textContent).toContain(
      'Tagline'
    );
  });

  it('should display the correct short heading', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('.short-heading-here6')?.textContent
    ).toContain('Sélection des meilleurs habitats à la campagne');
  });

  it('should display the correct description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('.lorem-ipsum-dolor12')?.textContent
    ).toContain(
      " Découvrez une sélection d'haibtats les mieux notés à la campagne, avec une verdure et un calme plus qu'apaisants. "
    );
  });

  it('should have a button with "Réserver" text and routerLink to /list-appart', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('.btn-primary div') as HTMLElement;
    expect(button.textContent).toContain('Réserver');
  });
});
