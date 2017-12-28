import { TestBed, inject } from '@angular/core/testing';

import { VkAuthService } from './vk-auth.service';

describe('VkAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VkAuthService]
    });
  });

  it('should be created', inject([VkAuthService], (service: VkAuthService) => {
    expect(service).toBeTruthy();
  }));
});
