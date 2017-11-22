import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseTrackZoneComponent } from './mouse-track-zone.component';
import { MySpecialLoggerService } from '../my-special-logger.service';
import { AnotherLoggerService } from '../another-logger.service';
import { LOG_LEVEL_TOKEN } from '../app.token';
import { LogLevel } from '../log-level.enum';
import { By } from '@angular/platform-browser';

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
    // boolean true 테스트
    expect(component).toBeTruthy();
  });

  it('마우스 클릭스 로그 적재', async(() => {
    expect(component).toBeTruthy();

    const trackZone = fixture.debugElement.query(By.css('.track-zone'));
    trackZone.triggerEventHandler("click", { clientX: 1, clientY: 2 });
    expect((<MySpecialLoggerService>component.logger).logs.length).toEqual(1);

    trackZone.triggerEventHandler("click", { clientX: 5, clientY: 3 });
    trackZone.triggerEventHandler("click", { clientX: 6, clientY: 4 });
    expect((<MySpecialLoggerService>component.logger).logs.length).toEqual(3);
  }));
});
