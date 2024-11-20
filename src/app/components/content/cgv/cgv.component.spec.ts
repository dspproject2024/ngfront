import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CgvComponent } from './cgv.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Import the schema

describe('CgvComponent', () => {
  let component: CgvComponent;
  let fixture: ComponentFixture<CgvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CgvComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add CUSTOM_ELEMENTS_SCHEMA to suppress unknown element errors
    })
    .compileComponents();

    fixture = TestBed.createComponent(CgvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
