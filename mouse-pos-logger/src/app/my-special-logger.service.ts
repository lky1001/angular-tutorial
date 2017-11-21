import { Injectable, Inject } from '@angular/core';
import { LogLevel } from './log-level.enum';
import * as format from 'date-fns/format';

import { LOG_LEVEL_TOKEN } from './app.token';

// 생성자의 매개변수를 의존성 주입 받을 것이다라는 얘기
@Injectable()
export class MySpecialLoggerService {
  // 현재 서비스에 설정한 로그 레벨
  logLevel: LogLevel;
  // 과거 로그 보관
  logs: string[] = [];
  // 과거 로그 보관 갯수
  private readonly MAX_HISTORY_CNT: number = 100;
  // 로그 출력시 시간 포멧
  private readonly TIME_FORMATTER: string = "YYYY-MM-DD HH:mm:ss.SSS";

  // ts는 접근자가 없으면 기본 public
  // 기본적으로 클래스는 타입추론을 하지만 enum은 열거형이므로(js에서 숫자 값) 명시적인 선언이 필요
  constructor(@Inject(LOG_LEVEL_TOKEN) logLevel: LogLevel) { 
    this.logLevel = logLevel;
  }

  debug(msg: string) {
    this.log(LogLevel.DEBUG, msg);
  }

  info(msg: string) {
    this.log(LogLevel.INFO, msg);
  }

  warn(msg: string) {
    this.log(LogLevel.WARN, msg);
  }

  error(msg: string) {
    this.log(LogLevel.ERROR, msg);
  }

  log(logLevel: LogLevel, msg: string) {
    const logMsg = this.getFormattedLogMsg(logLevel, msg);
    if (this.isProperLogLevel(logLevel)) {
      console.log(logMsg);
      this.keepLogHistory(logMsg);
    }
  }

  private keepLogHistory(log: string) {
    if (this.logs.length === this.MAX_HISTORY_CNT) {
      this.logs.shift();
    }

    this.logs.push(log);
  }

  private getFormattedLogMsg(logLevel: LogLevel, msg: string) {
    const curTimestamp = format(new Date(), this.TIME_FORMATTER);
    return `[${logLevel[logLevel]}] ${curTimestamp} ${msg}`;
  }

  private isProperLogLevel(logLevel: LogLevel): boolean {
      if (this.logLevel === LogLevel.DEBUG) {
        return true;
      }

      return logLevel >= this.logLevel;
  }
}
