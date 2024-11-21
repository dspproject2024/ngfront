import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddHabitatFormComponent } from './add-appart-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { HabitatService } from '../../../../services/add-habitat-form-service';
import { CategoryService } from '../../../../services/category.service';
import { of } from 'rxjs';
import { Category } from '../../../../models/category.model';

describe('AddHabitatFormComponent', () => {
  let component: AddHabitatFormComponent;
  let fixture: ComponentFixture<AddHabitatFormComponent>;
  let mockHabitatService: jasmine.SpyObj<HabitatService>;
  let mockCategoryService: jasmine.SpyObj<CategoryService>;

  // Correctly mock categories with all required properties
  const mockCategories: Category[] = [
    { id: 1, title: 'Category 1', slug: 'category-1', url: '/category-1' },
    { id: 2, title: 'Category 2', slug: 'category-2', url: '/category-2' },
  ];

  beforeEach(async () => {
    mockHabitatService = jasmine.createSpyObj('HabitatService', [
      'createHabitat',
    ]);
    mockCategoryService = jasmine.createSpyObj('CategoryService', [
      'getCategories',
    ]);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [AddHabitatFormComponent],
      providers: [
        { provide: HabitatService, useValue: mockHabitatService },
        { provide: CategoryService, useValue: mockCategoryService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddHabitatFormComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load categories on initialization', () => {
    // Return the mock categories with all required properties
    mockCategoryService.getCategories.and.returnValue(of(mockCategories));

    component.ngOnInit();

    expect(mockCategoryService.getCategories).toHaveBeenCalled();
    expect(component.categories).toEqual(mockCategories);
  });
});
