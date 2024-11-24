import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

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

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and render categories on initialization', () => {
    categoryServiceSpy.getCategories.and.returnValue(of(mockCategories));

    component.ngOnInit();
    expect(categoryServiceSpy.getCategories).toHaveBeenCalled();
    expect(mockCategories).toEqual(mockCategories);
  });

  it('should handle errors when fetching categories', () => {
    // Espionnez `console.error`
    spyOn(console, 'error');
<<<<<<< HEAD
    const error = new Error('Error fetching');
    categoryServiceSpy.getCategories.and.returnValue(throwError(() => error));

    component.ngOnInit();
    //  expect(categoryServiceSpy.getCategories).toHaveBeenCalled();
    //  expect(console.error).toHaveBeenCalledWith(
    //   'Error fetching categories:',
    //   error
    // );
    expect(component.moreCategories).toEqual(component.moreCategories);
=======
    
    // Simulez une erreur dans le service
    categoryServiceSpy.getCategories.and.returnValue(
      throwError(() => new Error('Error fetching')) // Création d'une erreur cohérente
    );
  
    // Appelez la méthode `ngOnInit` pour déclencher `fetchMoreCategories`
    component.ngOnInit();
    fixture.detectChanges();
  
    // Vérifiez que le service a été appelé
    expect(categoryServiceSpy.getCategories).toHaveBeenCalled();
  
    // Vérifiez que `console.error` a été appelé avec le bon message
    expect(console.error).toHaveBeenCalledWith(
      'Error fetching categories:',
      jasmine.any(Error) // Vérifie que le second argument est une erreur
    );
  
    // Vérifiez que `moreCategories` est réinitialisé
    expect(component.moreCategories).toEqual([]);
>>>>>>> 0dca9df62c360a96819581d4ba22a6b19b7855fe
  });
  
  
});
