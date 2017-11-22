import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseTrackZoneComponent } from './mouse-track-zone.component';
import { MySpecialLoggerService } from '../my-special-logger.service';
import { AnotherLoggerService } from '../another-logger.service';
import { LOG_LEVEL_TOKEN } from '../app.token';
import { LogLevel } from '../log-level.enum';

describe('MouseTrackZoneComponent', () => {
  let component: MouseTrackZoneComponent;
  let fixture: ComponentFixture<MouseTrackZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseTrackZoneComponent ],
      providers: [
        MySpecialLoggerService,
        AnotherLoggerService,
        {
          provide: LOG_LEVEL_TOKEN,
          useValue: LogLevel.INFO
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseTrackZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
