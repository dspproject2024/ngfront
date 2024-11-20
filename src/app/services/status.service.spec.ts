import { TestBed } from '@angular/core/testing';
import { StatusService } from './status.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Status } from '../models/status.model';
import { environment } from '../../environments/environment';

describe('StatusService', () => {
  let service: StatusService;
  let httpMock: HttpTestingController;

  const mockStatus: Status = {
    id: 1,
    title: 'Published',
    description: 'The item is published',
    slug: 'published',
    createdAt: '2023-01-01T10:00:00Z',
    updatedAt: '2023-01-02T10:00:00Z',
  };

  const mockStatuses: Status[] = [
    mockStatus,
    {
      id: 2,
      title: 'Draft',
      description: 'The item is in draft status',
      slug: 'draft',
      createdAt: '2023-01-03T10:00:00Z',
      updatedAt: '2023-01-04T10:00:00Z',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StatusService],
    });

    service = TestBed.inject(StatusService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all statuses', () => {
    service.getStatuses().subscribe((statuses) => {
      expect(statuses.length).toBe(2);
      expect(statuses).toEqual(mockStatuses);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/statuses`);
    expect(req.request.method).toBe('GET');
    req.flush(mockStatuses);
  });

  it('should fetch a specific status by ID', () => {
    const statusId = 1;

    service.getStatus(statusId).subscribe((status) => {
      expect(status).toEqual(mockStatus);
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}/statuses/${statusId}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockStatus);
  });

  it('should create a new status', () => {
    const newStatus: Status = {
      id: 3,
      title: 'Archived',
      description: 'The item is archived',
      slug: 'archived',
    };

    service.createStatus(newStatus).subscribe((status) => {
      expect(status).toEqual(newStatus);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/statuses`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newStatus);
    req.flush(newStatus);
  });

  it('should update an existing status', () => {
    const updatedStatus: Status = {
      ...mockStatus,
      title: 'Published (Updated)',
    };

    service.updateStatus(mockStatus.id!, updatedStatus).subscribe((status) => {
      expect(status).toEqual(updatedStatus);
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}/statuses/${mockStatus.id}`
    );
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedStatus);
    req.flush(updatedStatus);
  });

  it('should delete a status', () => {
    const statusId = 1;

    service.deleteStatus(statusId).subscribe((response) => {
      expect(response).toBeNull(); // Expect a null response for DELETE
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}/statuses/${statusId}`
    );
    expect(req.request.method).toBe('DELETE');
    req.flush(null); // Send null as the response body
  });

  it('should handle HTTP errors gracefully', () => {
    const statusId = 999; // Non-existent status ID

    service.getStatus(statusId).subscribe({
      next: () => fail('Expected an error, but got a response'),
      error: (error) => {
        expect(error).toBe(
          'Something went wrong with the request; please try again later.'
        );
      },
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}/statuses/${statusId}`
    );
    req.flush('Error occurred', { status: 404, statusText: 'Not Found' }); // Simulate a 404 error
  });
});
