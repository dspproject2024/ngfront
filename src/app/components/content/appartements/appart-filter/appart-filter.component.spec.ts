import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartFilterComponent } from './appart-filter.component';

describe('AppartFilterComponent', () => {
  let component: AppartFilterComponent;
  let fixture: ComponentFixture<AppartFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppartFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppartFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
