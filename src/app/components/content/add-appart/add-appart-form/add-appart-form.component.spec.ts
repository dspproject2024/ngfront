import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddHabitatFormComponent } from './add-appart-form.component';
import { HabitatService } from '../../../../services/add-habitat-form-service';
import { CategoryService } from '../../../../services/category.service';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { Habitat } from '../../../../models/habitat.model';
import { Category } from '../../../../models/category.model';

describe('AddAppartFormComponent', () => {
  let component: AddHabitatFormComponent;
  let fixture: ComponentFixture<AddHabitatFormComponent>;
  let mockHabitatService: jasmine.SpyObj<HabitatService>;
  let mockCategoryService: jasmine.SpyObj<CategoryService>;

  const mockCategories: Category[] = [
    {
      id: 1,
      title: 'Category 1',
      slug: 'category-1',
      url: '/categories/1',
      description: 'Description 1',
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date('2024-01-02'),
    },
  ];

  const mockHabitat: Habitat = {
    id: 1,
    title: 'Test Title',
    description: 'Test Description',
    slug: 'test-title',
    location: 'Test Location',
    city: 'Test City',
    country: 'Test Country',
    pricePerNight: 100,
    maxGuests: 4,
    amenities: ['WiFi', 'Kitchen'],
    availability: ['2024-01-01', '2024-01-02'],
    category: mockCategories[0].url,
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-01-05'),
    images: [],
    createdAt: "",
    updatedAt: "",
    owner: undefined,
  };

  beforeEach(async () => {
    mockHabitatService = jasmine.createSpyObj('HabitatService', ['createHabitat']);
    mockCategoryService = jasmine.createSpyObj('CategoryService', ['getCategories']);

    await TestBed.configureTestingModule({
      declarations: [AddHabitatFormComponent],
      imports: [FormsModule],
      providers: [
        { provide: HabitatService, useValue: mockHabitatService },
        { provide: CategoryService, useValue: mockCategoryService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddHabitatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load categories on init', () => {
    mockCategoryService.getCategories.and.returnValue(of(mockCategories));
    component.ngOnInit();
    expect(mockCategoryService.getCategories).toHaveBeenCalled();
    expect(component.categories).toEqual(mockCategories);
  });

  it('should submit the form and handle errors', () => {
    component.habitat = { ...mockHabitat, id: undefined }; // Pas d'ID pour la création
    component.conditionsAccepted = true;

    mockHabitatService.createHabitat.and.returnValue(of(mockHabitat));
    spyOn(console, 'error'); // Surveille les erreurs

    component.onSubmit();

    expect(mockHabitatService.createHabitat).toHaveBeenCalledWith(jasmine.objectContaining({ title: 'Test Title' }));
    expect(console.error).not.toHaveBeenCalled();
    expect(component.showPopup).toBeTrue();
  });

  it('should handle errors when submitting the form', () => {
    component.habitat.title = 'Test Title';
    component.conditionsAccepted = true;

    mockHabitatService.createHabitat.and.returnValue(of(mockHabitat)); // Simule une réponse sans ID
    spyOn(console, 'error');

    component.onSubmit();

    expect(console.error).toHaveBeenCalledWith(
      "Erreur : ID de l'habitat manquant pour l'upload des images."
    );
  });

  it('should call uploadImages when a valid habitat is created', () => {
    spyOn(component, 'uploadImages');
    component.habitat = { ...mockHabitat, id: undefined }; // Pas d'ID pour la création
    component.conditionsAccepted = true;

    mockHabitatService.createHabitat.and.returnValue(of(mockHabitat));

    component.onSubmit();

    expect(component.uploadImages).toHaveBeenCalledWith(1);
  });

  it('should close the popup when closePopup is called', () => {
    component.showPopup = true;
    component.closePopup();
    expect(component.showPopup).toBeFalse();
  });
});
