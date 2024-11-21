import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { HomeComponent } from './home.component';

// Création de composants factices pour simuler les composants enfants
@Component({
  selector: 'app-home-hero',
  template: '<div>Mock Home Hero Component</div>',
})
class MockHomeHeroComponent {}

@Component({
  selector: 'app-home-cookie-consent',
  template: '<div>Mock Home Cookie Consent Component</div>',
})
class MockHomeCookieConsentComponent {}

@Component({
  selector: 'app-home-tabs',
  template: '<div>Mock Home Tabs Component</div>',
})
class MockHomeTabsComponent {}

@Component({
  selector: 'app-home-categories',
  template: '<div>Mock Home Categories Component</div>',
})
class MockHomeCategoriesComponent {}

@Component({
  selector: 'app-home-testimonials',
  template: '<div>Mock Home Testimonials Component</div>',
})
class MockHomeTestimonialsComponent {}

@Component({
  selector: 'app-home-newsletter',
  template: '<div>Mock Home Newsletter Component</div>',
})
class MockHomeNewsletterComponent {}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        MockHomeHeroComponent,
        MockHomeCookieConsentComponent,
        MockHomeTabsComponent,
        MockHomeCategoriesComponent,
        MockHomeTestimonialsComponent,
        MockHomeNewsletterComponent,
      ], // Déclarez les composants factices
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the hero component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-home-hero')).toBeTruthy();
  });

  it('should render the cookie consent component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-home-cookie-consent')).toBeTruthy();
  });

  it('should render the tabs component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-home-tabs')).toBeTruthy();
  });

  it('should render the categories component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-home-categories')).toBeTruthy();
  });

  it('should render the testimonials component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-home-testimonials')).toBeTruthy();
  });

  it('should render the newsletter component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-home-newsletter')).toBeTruthy();
  });
});
