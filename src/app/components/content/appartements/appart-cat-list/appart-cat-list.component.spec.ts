import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartCatListComponent } from './appart-cat-list.component';

describe('AppartCatListComponent', () => {
  let component: AppartCatListComponent;
  let fixture: ComponentFixture<AppartCatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppartCatListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppartCatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
