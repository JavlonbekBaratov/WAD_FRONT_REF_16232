import { TestBed } from '@angular/core/testing';

import { KeyCategoriesService } from './key-categories.service';

describe('keycategoriesService', () => {
  let service: KeyCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
