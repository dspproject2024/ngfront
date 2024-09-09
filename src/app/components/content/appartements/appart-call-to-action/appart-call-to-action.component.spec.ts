import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartCallToActionComponent } from './appart-call-to-action.component';

describe('AppartCallToActionComponent', () => {
  let component: AppartCallToActionComponent;
  let fixture: ComponentFixture<AppartCallToActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppartCallToActionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppartCallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
