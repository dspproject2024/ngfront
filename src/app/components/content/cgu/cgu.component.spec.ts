import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CguComponent } from './cgu.component';
import { Component } from '@angular/core';

// Mock component for app-cgu-content
@Component({
  selector: 'app-cgu-content',
  template: '<p>Mock CGU Content</p>',
})
class MockCguContentComponent {}

describe('CguComponent', () => {
  let component: CguComponent;
  let fixture: ComponentFixture<CguComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CguComponent, MockCguContentComponent], // Declare the mock component
    }).compileComponents();

    fixture = TestBed.createComponent(CguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain app-cgu-content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-cgu-content')).toBeTruthy(); // Check for presence of app-cgu-content
  });
});
