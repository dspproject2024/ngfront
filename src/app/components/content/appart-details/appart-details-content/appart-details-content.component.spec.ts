import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartDetailsContentComponent } from './appart-details-content.component';

describe('AppartDetailsContentComponent', () => {
  let component: AppartDetailsContentComponent;
  let fixture: ComponentFixture<AppartDetailsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppartDetailsContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppartDetailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
