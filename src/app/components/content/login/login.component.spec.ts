import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { Component } from '@angular/core';

// Mock component for app-login-form
@Component({
  selector: 'app-login-form',
  template: '<div>Login Form</div>',
})
class MockLoginFormComponent {}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent, MockLoginFormComponent], // Include mock login form component
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the LoginComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render the app-login-form component', () => {
    const loginFormElement =
      fixture.nativeElement.querySelector('app-login-form');
    expect(loginFormElement).toBeTruthy(); // Check that app-login-form is rendered
  });
});
