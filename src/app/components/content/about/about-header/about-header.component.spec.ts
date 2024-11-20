import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutHeaderComponent } from './about-header.component';
import { By } from '@angular/platform-browser';

describe('AboutHeaderComponent', () => {
  let component: AboutHeaderComponent;
  let fixture: ComponentFixture<AboutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the tagline', () => {
    const taglineElement = fixture.debugElement.query(
      By.css('.tagline5')
    ).nativeElement;
    expect(taglineElement.textContent).toContain('Expérience');
  });

  it('should render the heading', () => {
    const headingElement = fixture.debugElement.query(
      By.css('.short-heading-here9')
    ).nativeElement;
    expect(headingElement.textContent).toContain('À Propos de Nous');
  });

  it('should render the mission statement', () => {
    const statementElement = fixture.debugElement.query(
      By.css('.lorem-ipsum-dolor15')
    ).nativeElement;
    expect(statementElement.textContent).toContain(
      'Chez AtypikHouse, notre mission est de créer une expérience unique, iconique et insolite de vie en harmonie avec la nature.'
    );
  });

  it('should render a "Contactez-nous" button with the correct router link', () => {
    const contactLink = fixture.debugElement.query(
      By.css('a[routerLink="/contact"]')
    ).nativeElement;
    expect(contactLink.textContent).toContain('Contactez-nous');
    expect(contactLink.getAttribute('routerLink')).toBe('/contact');
  });
});
