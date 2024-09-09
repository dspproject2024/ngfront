import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartDetailsContactComponent } from './appart-details-contact.component';

describe('AppartDetailsContactComponent', () => {
  let component: AppartDetailsContactComponent;
  let fixture: ComponentFixture<AppartDetailsContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppartDetailsContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppartDetailsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
