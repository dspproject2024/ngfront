import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CategoryService } from './category.service';
import { GetApiService } from './get-api.service';
import { Category } from '../models/category.model';
import {environment} from "../../environments/environment";

describe('CategoryService', () => {
  let service: CategoryService;
  let httpMock: HttpTestingController;
  let getApiServiceStub: Partial<GetApiService>;

  beforeEach(() => {
    // Create a mock for the GetApiService
    getApiServiceStub = {
      getApi: () => environment.apiUrl+"/api"
    };

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CategoryService,
        { provide: GetApiService, useValue: getApiServiceStub }
      ]
    });

    service = TestBed.inject(CategoryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verify that no unmatched requests are outstanding
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch categories from the API', () => {
    const mockCategories: Category[] = [
      {
        id: 1, title: 'Category 1',
        slug: '',
        url: ''
      },
      {
        id: 2, title: 'Category 2',
        slug: '',
        url: ''
      }
    ];

    service.getCategories().subscribe((categories) => {
      expect(categories.length).toBe(2);
      expect(categories).toEqual(mockCategories);
    });

    const req = httpMock.expectOne(environment.apiUrl+"/api/categories");
    expect(req.request.method).toBe('GET');
    req.flush(mockCategories);
  });
});
