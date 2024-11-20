import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatMoreCategoriesComponent } from './cat-more-categories.component';
import { CategoryService } from '../../../../services/category.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { Category } from '../../../../models/category.model';

describe('CatMoreCategoriesComponent', () => {
  let component: CatMoreCategoriesComponent;
  let fixture: ComponentFixture<CatMoreCategoriesComponent>;
  let categoryService: jasmine.SpyObj<CategoryService>;

  const mockCategories: Category[] = [
    { id: 1, title: 'Eco Lodge', description: 'Eco-friendly accommodations', slug: 'eco-lodge', url: 'path/to/image1.png' },
    { id: 2, title: 'Tree House', description: 'Live in nature', slug: 'tree-house', url: 'path/to/image2.png' },
    { id: 3, title: 'Tiny House', description: 'Compact living spaces', slug: 'tiny-house', url: 'path/to/image3.png' },
    { id: 4, title: 'Houseboat', description: 'Floating homes', slug: 'houseboat', url: 'path/to/image4.png' },
    { id: 5, title: 'Mountain Cabin', description: 'Serene mountain retreat', slug: 'mountain-cabin', url: 'path/to/image5.png' },
  ];

  beforeEach(async () => {
    const categoryServiceSpy = jasmine.createSpyObj('CategoryService', ['getCategories']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CatMoreCategoriesComponent],
      providers: [{ provide: CategoryService, useValue: categoryServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(CatMoreCategoriesComponent);
    component = fixture.componentInstance;
    categoryService = TestBed.inject(CategoryService) as jasmine.SpyObj<CategoryService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch more categories', () => {
    categoryService.getCategories.and.returnValue(of(mockCategories));

    component.fetchMoreCategories();

    expect(categoryService.getCategories).toHaveBeenCalled();
    const expectedCategories = mockCategories.slice(3, 6); // Dynamically get slice
    expect(component.moreCategories).toEqual(expectedCategories);
  });

  it('should log an error if fetching categories fails', () => {
    spyOn(console, 'error');
    categoryService.getCategories.and.returnValue(throwError('Error fetching'));

    component.fetchMoreCategories();

    expect(categoryService.getCategories).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith('Error fetching categories:', 'Error fetching');
  });

  it('should display more categories in the template', () => {
    component.moreCategories = mockCategories.slice(3, 6); // Dynamically get slice
    fixture.detectChanges();

    const categoryElements = fixture.nativeElement.querySelectorAll('.column33');
    expect(categoryElements.length).toBe(component.moreCategories.length);
    if (categoryElements.length > 0) {
      expect(categoryElements[0].textContent).toContain('Houseboat');
      expect(categoryElements[1].textContent).toContain('Mountain Cabin');
    }
  });
});
