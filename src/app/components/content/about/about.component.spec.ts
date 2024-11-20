import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AboutHistoryComponent } from './about-history/about-history.component';

describe('AboutHistoryComponent', () => {
  let component: AboutHistoryComponent;
  let fixture: ComponentFixture<AboutHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the main heading', () => {
    const headingElement = fixture.debugElement.query(
      By.css('.heading43')
    ).nativeElement;
    expect(headingElement.textContent).toContain(
      "Notre histoire est celle d'une SARL..."
    );
  });

  it('should render the first paragraph of the story', () => {
    const textElement = fixture.debugElement.queryAll(By.css('.text69'))[0]
      .nativeElement;
    expect(textElement.textContent).toContain(
      "Avec un capital de 10 000€, formée par 3 associés passionnés de voyages, désireux de procurer à autrui des expériences mémorables, à l'image de celles qu'ils ont vécues."
    );
  });

  it('should render the second paragraph of the story', () => {
    const textElement = fixture.debugElement.queryAll(By.css('.text69'))[1]
      .nativeElement;
    expect(textElement.textContent).toContain(
      'Chez AtypikHouse, nous sommes convaincus que vivre dans des lieux de séjour hors du commun, apporte une touche de magie à la vie.'
    );
  });

  it('should render the image with the correct alt text and src attribute', () => {
    const imgElement = fixture.debugElement.query(
      By.css('.placeholder-image-icon38')
    ).nativeElement;
    expect(imgElement.alt).toBe(
      'illustration_de_membres_travaillant_chez_atypikHouse'
    );

    // Extract only the relative path part of the src attribute
    const imgSrc = imgElement.src.split('/assets/')[1];
    expect(imgSrc).toBe('images/placeholder-image22@2x.png');
  });
});
