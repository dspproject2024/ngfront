import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';

// Mock components
@Component({
  selector: 'app-navbar-main',
  template: '<div>Navbar Main</div>',
})
class MockNavbarMainComponent {}

@Component({
  selector: 'app-navbar-connected',
  template: '<div>Navbar Connected</div>',
})
class MockNavbarConnectedComponent {}

@Component({
  selector: 'app-footer-main',
  template: '<div>Footer Main</div>',
})
class MockFooterMainComponent {}

describe('AppComponent', () => {
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let routerEventsSubject: Subject<NavigationEnd>;
  let mockRouter: any; // Mock router with dynamic getter for url

  beforeEach(async () => {
    // Mock AuthService
    mockAuthService = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    mockAuthService.isLoggedIn.and.returnValue(true); // Mock logged-in state

    // Mock Router with a dynamic url getter
    routerEventsSubject = new Subject();
    mockRouter = {
      events: routerEventsSubject.asObservable(),
      navigate: jasmine.createSpy('navigate'),
      get url() {
        return this._url;
      },
      _url: '/login', // Initial mock url value
    };

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        MockNavbarMainComponent,
        MockNavbarConnectedComponent,
        MockFooterMainComponent,
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngfront'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ngfront');
  });

  it('should update showHeaderFooter based on route', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Simulate route change to `/login`
    mockRouter._url = '/login';
    routerEventsSubject.next(new NavigationEnd(1, '/login', '/login'));
    expect(app.showHeaderFooter).toBeFalse(); // Header/Footer hidden for `/login`

    // Simulate route change to `/home`
    mockRouter._url = '/home';
    routerEventsSubject.next(new NavigationEnd(2, '/home', '/home'));
    expect(app.showHeaderFooter).toBeTrue(); // Header/Footer visible for `/home`
  });

  it('should update isLoggedIn based on AuthService state', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Simulate logged-in state
    mockAuthService.isLoggedIn.and.returnValue(true);
    routerEventsSubject.next(
      new NavigationEnd(1, '/some-route', '/some-route')
    );
    expect(app.isLoggedIn).toBeTrue(); // Reflects logged-in state

    // Simulate logged-out state
    mockAuthService.isLoggedIn.and.returnValue(false);
    routerEventsSubject.next(
      new NavigationEnd(2, '/another-route', '/another-route')
    );
    expect(app.isLoggedIn).toBeFalse(); // Reflects logged-out state
  });

  it('should correctly render navbar and footer based on login state', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    // Simulate logged-out state
    mockAuthService.isLoggedIn.and.returnValue(false);
    mockRouter._url = '/home';
    routerEventsSubject.next(new NavigationEnd(1, '/home', '/home'));
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('app-navbar-main')).toBeTruthy();
    expect(
      fixture.nativeElement.querySelector('app-navbar-connected')
    ).toBeFalsy();

    // Simulate logged-in state
    mockAuthService.isLoggedIn.and.returnValue(true);
    mockRouter._url = '/dashboard';
    routerEventsSubject.next(new NavigationEnd(2, '/dashboard', '/dashboard'));
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('app-navbar-main')).toBeFalsy();
    expect(
      fixture.nativeElement.querySelector('app-navbar-connected')
    ).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')?.textContent).toContain('Navbar Main');
  });
});
