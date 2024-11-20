import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CguContentComponent } from './cgu-content.component';

describe('CguContentComponent', () => {
  let component: CguContentComponent;
  let fixture: ComponentFixture<CguContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CguContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CguContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      "Conditions Générales d'Utilisation (C.G.U)"
    );
  });

  it('should contain all section headers', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const headers = Array.from(compiled.querySelectorAll('h2')).map(
      (header) => header.textContent
    );
    expect(headers).toEqual([
      '1. Objet des C.G.U :',
      '2. Accès au site :',
      "3. Responsabilité de l'utilisateur :",
      '4. Contenu du site :',
      '5. Protection des données personnelles :',
      '6. Modification des C.G.U :',
      '7. Droit applicable et juridiction compétente :',
    ]);
  });

  it('should display the AtypikHouse link correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('a') as HTMLAnchorElement;
    expect(link).toBeTruthy();
    expect(link.href).toContain('http://www.atypikhouse.fr');
    expect(link.textContent).toContain('www.atypikhouse.fr');
  });
});
