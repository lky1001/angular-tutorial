import { Component, OnInit, Input, Host, Optional } from '@angular/core';
import { MySpecialLoggerService } from '../my-special-logger.service';
import { LogLevel } from '../log-level.enum';

import { LOG_LEVEL_TOKEN } from '../app.token';
import { LoggerService } from '../logger-service';
import { AnotherLoggerService } from '../another-logger.service';

@Component({
  selector: 'mpl-mouse-track-zone',
  templateUrl: './mouse-track-zone.component.html',
  styleUrls: ['./mouse-track-zone.component.css'],
  // providers: [MySpecialLoggerService,
  //   {
  //     provide: LOG_LEVEL_TOKEN,
  //     useValue: LogLevel.DEBUG
  //   }
  // ]
})
export class MouseTrackZoneComponent implements OnInit {
  logger: LoggerService;

  // 의존성 주입
  // @Component의 providers에 의해서 주입받음
  constructor(@Host() @Optional() mySpecialLogger: MySpecialLoggerService, anotherLogger: AnotherLoggerService) {
    this.logger = mySpecialLogger ? mySpecialLogger : anotherLogger;
  }

  ngOnInit() {
  }

  // 마우스 포인트 캡쳐할 메소드
  captureMousePos($event: MouseEvent) {
    this.logger.debug('click event occured');
    const pos = [$event.clientX, $event.clientY];
    this.logger.info(`x:${pos[0]} y:${pos[1]}`);
  }
}
