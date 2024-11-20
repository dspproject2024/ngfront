import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Import the schema to handle unknown elements

describe('PrivacyPolicyComponent', () => {
  let component: PrivacyPolicyComponent;
  let fixture: ComponentFixture<PrivacyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivacyPolicyComponent], // Declare the component
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add CUSTOM_ELEMENTS_SCHEMA to handle custom elements
    }).compileComponents(); // Compile the component and template

    fixture = TestBed.createComponent(PrivacyPolicyComponent); // Create the test fixture
    component = fixture.componentInstance; // Get the component instance
    fixture.detectChanges(); // Trigger Angular's change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verify that the component is created successfully
  });
});
