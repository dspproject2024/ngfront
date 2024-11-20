import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AboutTeamComponent } from './about-team.component';

describe('AboutTeamComponent', () => {
  let component: AboutTeamComponent;
  let fixture: ComponentFixture<AboutTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutTeamComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the section title and tagline', () => {
    const sectionTitle = fixture.debugElement.query(
      By.css('.heading43')
    ).nativeElement;
    const tagline = fixture.debugElement.query(
      By.css('.tagline5')
    ).nativeElement;

    expect(sectionTitle.textContent).toContain('Notre équipe');
    expect(tagline.textContent).toContain('À Propos');
  });

  it("should render Jean Dupont's card with correct details", () => {
    const card = fixture.debugElement.queryAll(By.css('.card12'))[0];
    const name = card.query(By.css('.name7')).nativeElement.textContent;
    const role = card.query(By.css('.text69')).nativeElement.textContent;
    const description = card.query(By.css('.text70')).nativeElement.textContent;
    const img = card.query(By.css('.placeholder-image-icon39')).nativeElement;

    expect(name).toContain('Jean Dupont');
    expect(role).toContain('Directeur marketing');
    expect(description).toContain(
      'Jean est un expert en marketing avec une passion pour la créativité.'
    );
    expect(img.alt).toBe('Jean Dupont');
    expect(img.src).toContain('placeholder-image23@2x.png');
  });

  it("should render Marie Martin's card with correct details", () => {
    const card = fixture.debugElement.queryAll(By.css('.card12'))[1];
    const name = card.query(By.css('.name7')).nativeElement.textContent;
    const role = card.query(By.css('.text69')).nativeElement.textContent;
    const description = card.query(By.css('.text70')).nativeElement.textContent;
    const img = card.query(By.css('.placeholder-image-icon39')).nativeElement;

    expect(name).toContain('Marie Martin');
    expect(role).toContain('Designer graphique');
    expect(description).toContain(
      'Marie est une designer talentueuse qui apporte une touche artistique à nos projets.'
    );
    expect(img.alt).toBe('Marie Martin');
    expect(img.src).toContain('placeholder-image24@2x.png');
  });

  it("should render Pierre Dubois's card with correct details", () => {
    const card = fixture.debugElement.queryAll(By.css('.card12'))[2];
    const name = card.query(By.css('.name7')).nativeElement.textContent;
    const role = card.query(By.css('.text69')).nativeElement.textContent;
    const description = card.query(By.css('.text70')).nativeElement.textContent;
    const img = card.query(By.css('.placeholder-image-icon39')).nativeElement;

    expect(name).toContain('Pierre Dubois');
    expect(role).toContain('Développeur web');
    expect(description).toContain(
      'Pierre est un développeur expérimenté qui transforme nos idées en réalité numérique.'
    );
    expect(img.alt).toBe('Pierre Dubois');
    expect(img.src).toContain('placeholder-image25@2x.png');
  });

  it('should render social icons for each team member', () => {
    const socialIcons = fixture.debugElement.queryAll(By.css('.social-icons'));
    expect(socialIcons.length).toBe(3); // Three team members

    socialIcons.forEach((iconContainer) => {
      const icons = iconContainer.queryAll(By.css('img'));
      expect(icons.length).toBe(3); // LinkedIn, X, Dribbble
      expect(icons[0].nativeElement.alt).toBe('LinkedIn');
      expect(icons[1].nativeElement.alt).toBe('X');
      expect(icons[2].nativeElement.alt).toBe('Dribbble');
    });
  });
});
