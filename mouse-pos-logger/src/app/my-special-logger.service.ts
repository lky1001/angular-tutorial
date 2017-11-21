import { Injectable } from '@angular/core';
import { LogLevel } from './log-level.enum';

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
  constructor(logLevel: LogLevel) { 
    this.logLevel = logLevel;
  }

}
