import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it ('should have registerUser function', function (){

    expect [AuthService.registerUser].toBeDefined();

  });

  it ('should have authenticate attributes', function(){

    expect [AuthService.authenticate].not.toBe(null);

  } );






});
