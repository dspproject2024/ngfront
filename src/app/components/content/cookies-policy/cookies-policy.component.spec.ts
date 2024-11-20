import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CookiesPolicyComponent } from './cookies-policy.component';
import { Component } from '@angular/core';

// Mock the child component
@Component({
  selector: 'app-cookies-policy-content',
  template: '<div>Cookies Policy Content</div>',
})
class MockCookiesPolicyContentComponent {}

describe('CookiesPolicyComponent', () => {
  let component: CookiesPolicyComponent;
  let fixture: ComponentFixture<CookiesPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CookiesPolicyComponent, MockCookiesPolicyContentComponent], // Include the mock child component
    }).compileComponents();

    fixture = TestBed.createComponent(CookiesPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the child component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-cookies-policy-content')).toBeTruthy();
    // expect(true).toBe(true);
  });
});
