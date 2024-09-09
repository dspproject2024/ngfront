import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartAppartListComponent } from './appart-appart-list.component';

describe('AppartAppartListComponent', () => {
  let component: AppartAppartListComponent;
  let fixture: ComponentFixture<AppartAppartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppartAppartListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppartAppartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
