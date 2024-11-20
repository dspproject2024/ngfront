import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactHeaderComponent } from './contact-header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ContactHeaderComponent', () => {
  let component: ContactHeaderComponent;
  let fixture: ComponentFixture<ContactHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactHeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow custom elements in the template
    }).compileComponents();

    fixture = TestBed.createComponent(ContactHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the tagline', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.tagline4')?.textContent).toContain(
      'Réservez'
    );
  });

  it('should render the short heading', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('.short-heading-here8')?.textContent
    ).toContain('Contactez-nous dès maintenant');
  });

  it('should render the description text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(
      compiled.querySelector('.lorem-ipsum-dolor14')?.textContent
    ).toContain('Pour réserver un appartement, contactez-nous dès maintenant.');
  });

  it('should have a "contactez-nous" button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const contactButton = compiled.querySelector(
      '.styleprimary-smallfalse-da14'
    );
    expect(contactButton).toBeTruthy();
    expect(contactButton?.textContent).toContain('contactez-nous');
  });

  it('should have an "En savoir plus" button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const moreInfoButton = compiled.querySelector(
      '.stylesecondary-smallfalse15'
    );
    expect(moreInfoButton).toBeTruthy();
    expect(moreInfoButton?.textContent).toContain('En savoir plus');
  });
});
