import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartDetailsComponent } from './appart-details.component';

describe('AppartDetailsComponent', () => {
  let component: AppartDetailsComponent;
  let fixture: ComponentFixture<AppartDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppartDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
