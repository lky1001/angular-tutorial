import { TestBed, inject } from '@angular/core/testing';

import { MySpecialLoggerService } from './my-special-logger.service';
import { LOG_LEVEL_TOKEN } from './app.token';
import { LogLevel } from './log-level.enum';

describe('MySpecialLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MySpecialLoggerService,
        {
          provide: LOG_LEVEL_TOKEN,
          useValue: LogLevel.INFO
        }
      ]
    });
  });

  it('should be created', inject([MySpecialLoggerService], (service: MySpecialLoggerService) => {
    expect(service).toBeTruthy();
  }));
});
