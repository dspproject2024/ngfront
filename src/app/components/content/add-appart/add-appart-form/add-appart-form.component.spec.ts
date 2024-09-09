import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppartFormComponent } from './add-appart-form.component';

describe('AddAppartFormComponent', () => {
  let component: AddAppartFormComponent;
  let fixture: ComponentFixture<AddAppartFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAppartFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAppartFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
