import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // To handle custom elements like <app-register-form>

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow usage of custom elements
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the <app-register-form> component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const registerFormElement = compiled.querySelector('app-register-form');
    expect(registerFormElement).toBeTruthy(); // Verify the presence of <app-register-form>
  });
});
