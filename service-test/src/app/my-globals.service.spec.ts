import { TestBed, inject } from '@angular/core/testing';

import { MyGlobalsService } from './my-globals.service';

describe('MyGlobalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyGlobalsService]
    });
  });

  it('should ...', inject([MyGlobalsService], (service: MyGlobalsService) => {
    expect(service).toBeTruthy();
  }));
});
