import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminProfileDropdownComponent } from './admin-profile-dropdown.component';
import { By } from '@angular/platform-browser';

describe('AdminProfileDropdownComponent', () => {
  let component: AdminProfileDropdownComponent;
  let fixture: ComponentFixture<AdminProfileDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminProfileDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminProfileDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the welcome message with user name', () => {
    const welcomeElement = fixture.debugElement.query(
      By.css('.profilContainer p')
    );
    expect(welcomeElement.nativeElement.textContent).toContain(
      'Bienvenue dans ton espace, Malik'
    );
  });

  it('should contain a link to the profile page', () => {
    const profileLink = fixture.debugElement.query(
      By.css('.profilContainer a[href="profil.html"]')
    );
    expect(profileLink).toBeTruthy();
    expect(profileLink.nativeElement.textContent).toContain('Mon profil');
  });

  it('should contain a link for logout', () => {
    const logoutLink = fixture.debugElement.query(
      By.css('.profilContainer a[href="#"]')
    );
    expect(logoutLink).toBeTruthy();
    expect(logoutLink.nativeElement.textContent).toContain('Se déconnecter');
  });
});
