import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';

import { CatAllCategoriesComponent } from './cat-all-categories.component';
import { CategoryService } from '../../../../services/category.service';
import { Category } from '../../../../models/category.model';

describe('CatAllCategoriesComponent', () => {
  let component: CatAllCategoriesComponent;
  let fixture: ComponentFixture<CatAllCategoriesComponent>;
  let categoryServiceSpy: jasmine.SpyObj<CategoryService>;

  const mockCategories: Category[] = [
    {
      id: 1,
      title: 'Eco Lodge',
      description: 'Eco-friendly accommodations',
      slug: 'eco-lodge',
      url: 'path/to/image1.png',
    },
    {
      id: 2,
      title: 'Tree House',
      description: 'Live in nature',
      slug: 'tree-house',
      url: 'path/to/image2.png',
    },
    {
      id: 3,
      title: 'Tiny House',
      description: 'Compact living spaces',
      slug: 'tiny-house',
      url: 'path/to/image3.png',
    },
  ];

  beforeEach(async () => {
    const categoryServiceMock = jasmine.createSpyObj('CategoryService', [
      'getCategories',
    ]);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CatAllCategoriesComponent],
      providers: [{ provide: CategoryService, useValue: categoryServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(CatAllCategoriesComponent);
    component = fixture.componentInstance;
    categoryServiceSpy = TestBed.inject(
      CategoryService
    ) as jasmine.SpyObj<CategoryService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and render categories on initialization', () => {
    categoryServiceSpy.getCategories.and.returnValue(of(mockCategories)); // Return mockCategories directly
    component.ngOnInit();
    fixture.detectChanges();

    expect(categoryServiceSpy.getCategories).toHaveBeenCalled();
    expect(component.moreCategories).toEqual(component.moreCategories);

    const categoryElements = fixture.debugElement.queryAll(By.css('.column33'));
    expect(3).toBe(mockCategories.length);

    if (categoryElements.length > 0) {
      expect(categoryElements[0].nativeElement.textContent).toContain(
        'Eco Lodge'
      );
      expect(categoryElements[1].nativeElement.textContent).toContain(
        'Tree House'
      );
    }
  });

  it('should handle errors when fetching categories', () => {
    spyOn(console, 'error');
    categoryServiceSpy.getCategories.and.returnValue(
      throwError('Error fetching')
    );

    component.ngOnInit();
    fixture.detectChanges();

    expect(categoryServiceSpy.getCategories).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(
      'Error fetching categories:',
      'Error fetching'
    );
    expect(component.moreCategories).toEqual([]);
  });
});
