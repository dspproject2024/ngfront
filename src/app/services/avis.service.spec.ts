import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AvisService } from './avis.service';
import { Avis } from '../models/avis.model';

describe('AvisService', () => {
  let service: AvisService;
  let httpMock: HttpTestingController;

  const mockAvis: Avis = {
    id: 1,
    rating: 5,
    comment: 'Excellent stay!',
    publishedAt: '2023-01-01T10:00:00Z',
    createdAt: '2023-01-01T09:00:00Z',
    updatedAt: '2023-01-02T10:00:00Z',
    user: {
      id: 1,
      username: 'john_doe',
      avatarUrl: 'https://example.com/avatar.jpg',
    },
    habitat: {
      id: 1,
      title: 'Cozy Apartment',
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AvisService],
    });
    service = TestBed.inject(AvisService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all comments for a habitat', () => {
    const mockComments: Avis[] = [mockAvis];

    service.getCommentsByHabitat(1).subscribe((comments) => {
      expect(comments.length).toBe(1);
      expect(comments).toEqual(mockComments);
    });

    const req = httpMock.expectOne(
      'https://dsp-devo22b-jg-sr-ml-my.net/api/aviss?id=1'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockComments);
  });

  it('should fetch a specific comment by ID', () => {
    service.getCommentById(1).subscribe((comment) => {
      expect(comment).toEqual(mockAvis);
    });

    const req = httpMock.expectOne(
      'https://dsp-devo22b-jg-sr-ml-my.net/api/aviss/1'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockAvis);
  });

  it('should create a new comment', () => {
    const newComment: Avis = {
      ...mockAvis,
      id: 2,
      comment: 'Great location!',
    };

    service.createComment(newComment).subscribe((comment) => {
      expect(comment).toEqual(newComment);
    });

    const req = httpMock.expectOne(
      'https://dsp-devo22b-jg-sr-ml-my.net/api/aviss'
    );
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newComment);
    req.flush(newComment);
  });

  it('should update an existing comment', () => {
    const updatedComment: Avis = {
      ...mockAvis,
      comment: 'Updated comment',
    };

    service.updateComment(1, updatedComment).subscribe((comment) => {
      expect(comment).toEqual(updatedComment);
    });

    const req = httpMock.expectOne(
      'https://dsp-devo22b-jg-sr-ml-my.net/api/aviss/1'
    );
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(updatedComment);
    req.flush(updatedComment);
  });

  it('should delete a comment', () => {
    service.deleteComment(1).subscribe((response) => {
      expect(response).toBeNull(); // Expecting null as the response from DELETE
    });

    const req = httpMock.expectOne(
      'https://dsp-devo22b-jg-sr-ml-my.net/api/aviss/1'
    );
    expect(req.request.method).toBe('DELETE');
    req.flush(null); // Send null explicitly
  });
});
