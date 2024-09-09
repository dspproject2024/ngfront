import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartAppartItemComponent } from './appart-appart-item.component';

describe('AppartAppartItemComponent', () => {
  let component: AppartAppartItemComponent;
  let fixture: ComponentFixture<AppartAppartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppartAppartItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppartAppartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
