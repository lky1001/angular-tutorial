import { Component, OnInit } from '@angular/core';
import { MySpecialLoggerService } from '../my-special-logger.service';
import { LogLevel } from '../log-level.enum';

@Component({
  selector: 'mpl-mouse-track-zone',
  templateUrl: './mouse-track-zone.component.html',
  styleUrls: ['./mouse-track-zone.component.css']
})
export class MouseTrackZoneComponent implements OnInit {
  // 컴포넌트 로그 레벨
  logLevel: LogLevel = LogLevel.INFO;
  // 로그 출력 서비스
  logger: MySpecialLoggerService;

  constructor() {
    // 컴포넌트마다 new 한다.
    this.logger = new MySpecialLoggerService(this.logLevel);
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
