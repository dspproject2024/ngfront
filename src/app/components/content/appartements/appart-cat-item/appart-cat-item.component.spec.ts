import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartCatItemComponent } from './appart-cat-item.component';

describe('AppartCatItemComponent', () => {
  let component: AppartCatItemComponent;
  let fixture: ComponentFixture<AppartCatItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppartCatItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppartCatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
