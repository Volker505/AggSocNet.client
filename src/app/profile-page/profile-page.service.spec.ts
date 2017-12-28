import { TestBed, inject } from '@angular/core/testing';

import { ProfilePageService } from './profile-page.service';

describe('ProfilePageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfilePageService]
    });
  });

  it('should be created', inject([ProfilePageService], (service: ProfilePageService) => {
    expect(service).toBeTruthy();
  }));
});
