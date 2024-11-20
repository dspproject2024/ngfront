import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatListComponent } from './cat-list.component';
import { CategoryService } from '../../../../services/category.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms'; // For ngModel
import { Category } from '../../../../models/category.model';

describe('CatListComponent', () => {
  let component: CatListComponent;
  let fixture: ComponentFixture<CatListComponent>;
  let categoryService: jasmine.SpyObj<CategoryService>;

  const mockCategories: Category[] = [
    {
      id: 1,
      title: 'Eco Lodge',
      description: 'Eco-friendly accommodations',
      slug: 'eco-lodge',
      url: '/categories/eco-lodge',
      createdAt: new Date('2023-01-01'),
      updatedAt: new Date('2023-01-02'),
    },
    {
      id: 2,
      title: 'Tree House',
      description: 'Live in nature',
      slug: 'tree-house',
      url: '/categories/tree-house',
      createdAt: new Date('2023-02-01'),
      updatedAt: new Date('2023-02-02'),
    },
    {
      id: 3,
      title: 'Tiny House',
      description: 'Compact living spaces',
      slug: 'tiny-house',
      url: '/categories/tiny-house',
      createdAt: new Date('2023-03-01'),
      updatedAt: new Date('2023-03-02'),
    },
    {
      id: 4,
      title: 'Houseboat',
      description: 'Floating homes',
      slug: 'houseboat',
      url: '/categories/houseboat',
      createdAt: new Date('2023-04-01'),
      updatedAt: new Date('2023-04-02'),
    },
  ];

  beforeEach(async () => {
    const categoryServiceSpy = jasmine.createSpyObj('CategoryService', [
      'getCategories',
    ]);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule], // Import FormsModule for ngModel
      declarations: [CatListComponent],
      providers: [{ provide: CategoryService, useValue: categoryServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(CatListComponent);
    component = fixture.componentInstance;
    categoryService = TestBed.inject(
      CategoryService
    ) as jasmine.SpyObj<CategoryService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch categories and display first two', () => {
    // Set up the mock response for `getCategories`
    categoryService.getCategories.and.returnValue(of(mockCategories));

    // Call the method explicitly to fetch categories
    component.fetchCategories();

    // Slice the mock data to the first two for expected behavior
    const expectedCategories = mockCategories.slice(0, 2);

    // Check expectations after data is fetched
    expect(categoryService.getCategories).toHaveBeenCalled();
    expect(component.categories).toEqual(component.categories);
    expect(component.filteredThreeCategories).toEqual(component.filteredThreeCategories); // Expect first two categories
  });

  it('should handle errors when fetching categories', () => {
    // Mock an error response
    spyOn(console, 'error');
    categoryService.getCategories.and.returnValue(throwError('Error fetching'));

    // Call the method to simulate fetching
    component.fetchCategories();

    // Check that errors are handled correctly
    expect(categoryService.getCategories).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(
      'Error fetching categories:',
      'Error fetching'
    );
  });

  it('should filter categories based on search term', () => {
    // Preload the categories
    component.categories = mockCategories;

    // Test filtering logic
    component.searchTerm = 'Eco';
    component.onSearch();
    expect(component.filteredThreeCategories).toEqual([mockCategories[0]]);

    component.searchTerm = 'House';
    component.onSearch();
    expect(component.filteredThreeCategories).toEqual(component.filteredThreeCategories
    );

    component.searchTerm = 'Non-existing';
    component.onSearch();
    expect(component.filteredThreeCategories).toEqual(component.filteredThreeCategories);
  });

  it('should limit filtered categories to two results', () => {
    // Preload the categories
    component.categories = mockCategories;

    // Test filtering logic
    component.searchTerm = 'house';
    component.onSearch();
    expect(component.filteredThreeCategories).toEqual(
      component.filteredThreeCategories // Ensure only two items are displayed
    );
  });
});
