import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartStatsComponent } from './appart-stats.component';

describe('AppartStatsComponent', () => {
  let component: AppartStatsComponent;
  let fixture: ComponentFixture<AppartStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppartStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppartStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
