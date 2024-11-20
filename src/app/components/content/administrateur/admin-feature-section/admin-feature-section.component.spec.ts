import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminFeatureSectionComponent } from './admin-feature-section.component';
import { By } from '@angular/platform-browser';

describe('AdminFeatureSectionComponent', () => {
  let component: AdminFeatureSectionComponent;
  let fixture: ComponentFixture<AdminFeatureSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminFeatureSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminFeatureSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    const titleElement = fixture.nativeElement.querySelector(
      '.short-heading-here2'
    );
    expect(titleElement.textContent).toContain('Gérer utilisateurs');
  });

  it('should render the description', () => {
    const descriptionElement = fixture.nativeElement.querySelector(
      '.notre-fonctionnalit-crud'
    );
    expect(descriptionElement.textContent).toContain(
      'Notre fonctionnalité CRUD vous permet de créer, lire, mettre à jour et supprimer facilement les utilisateurs. Simplifiez votre gestion et gagnez du temps avec AtypickHouse.'
    );
  });

  it('should render the button text', () => {
    const buttonElement = fixture.nativeElement.querySelector('.button10');
    expect(buttonElement.textContent).toContain('Gérer utilisateurs');
  });

  it('should render the image with correct src and alt attributes', () => {
    const imgElement = fixture.debugElement.query(By.css('img')).nativeElement;

    const expectedSrc = new URL(
      '../../assets/images/gereUtilisateurs.png',
      window.location.href
    ).href;
    expect(imgElement.src).toBe(expectedSrc);
    expect(imgElement.alt).toBe('Gérer utilisateurs');
  });

  it('should update inputs dynamically', () => {
    component.title = 'Gérer rôles';
    component.description =
      'Grâce à cette fonctionnalité, vous pouvez désormais assigner, modifier ou retirer de nouveaux rôles aux utilisateurs.';
    component.imageUrl = '../../assets/images/roles.png';
    component.buttonText = 'Gérer rôles';

    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector(
      '.short-heading-here2'
    );
    const descriptionElement = fixture.nativeElement.querySelector(
      '.notre-fonctionnalit-crud'
    );
    const buttonElement = fixture.nativeElement.querySelector('.button10');
    const imgElement = fixture.debugElement.query(By.css('img')).nativeElement;

    const expectedSrc = new URL(
      '../../assets/images/roles.png',
      window.location.href
    ).href;

    expect(titleElement.textContent).toContain('Gérer rôles');
    expect(descriptionElement.textContent).toContain(
      'Grâce à cette fonctionnalité, vous pouvez désormais assigner, modifier ou retirer de nouveaux rôles aux utilisateurs.'
    );
    expect(buttonElement.textContent).toContain('Gérer rôles');
    expect(imgElement.src).toBe(expectedSrc);
    expect(imgElement.alt).toBe('Gérer rôles');
  });
});
