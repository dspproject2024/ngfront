import { TestBed } from '@angular/core/testing';

import { GetApiService } from './get-api.service';

describe('GetApiService', () => {
  let service: GetApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetApiService],
    });
    service = TestBed.inject(GetApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the correct API URL', () => {
    const apiUrl = service.getApi();
    expect(apiUrl).toBe('https://dsp-devo22b-jg-sr-ml-my.net/api');
  });
});
