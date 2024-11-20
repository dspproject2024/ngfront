import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterTitleComponent } from './register-title.component';

describe('RegisterTitleComponent', () => {
  let component: RegisterTitleComponent;
  let fixture: ComponentFixture<RegisterTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain(
      'register-title works!'
    );
  });
});
