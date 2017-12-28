import { TestBed, inject } from '@angular/core/testing';

import { VkAuthReqService } from './vk-auth-req.service';

describe('VkAuthReqService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VkAuthReqService]
    });
  });

  it('should be created', inject([VkAuthReqService], (service: VkAuthReqService) => {
    expect(service).toBeTruthy();
  }));
});
