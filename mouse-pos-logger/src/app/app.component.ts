import { Component } from '@angular/core';
import { MySpecialLoggerService } from './my-special-logger.service';
import { LogLevel } from './log-level.enum';

@Component({
  selector: 'mpl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mpl works!';

  // 의존성 주입
  constructor(private logger: MySpecialLoggerService) {
    //this.testLoggerLevel();
  }

  private testLoggerLevel() {
    console.log("========Default(Info) Log Level========");
    this.logger.debug("test logging.. in debug");
    this.logger.info("test logging.. in info");
    this.logger.warn("test logging.. in warn");
    this.logger.error("test logging.. in error");

    this.logger.logLevel = LogLevel.DEBUG;
    console.log("\n\n========Debug Log Level========");
    this.logger.debug("test logging.. in debug");
    this.logger.info("test logging.. in info");
    this.logger.warn("test logging.. in warn");
    this.logger.error("test logging.. in error");

    this.logger.logLevel = LogLevel.WARN;
    console.log("\n\n========Warn Log Level========");
    this.logger.debug("test logging.. in debug");
    this.logger.info("test logging.. in info");
    this.logger.warn("test logging.. in warn");
    this.logger.error("test logging.. in error");

    this.logger.logLevel = LogLevel.ERROR;
    console.log("\n\n========Error Log Level========");
    this.logger.debug("test logging.. in debug");
    this.logger.info("test logging.. in info");
    this.logger.warn("test logging.. in warn");
    this.logger.error("test logging.. in error");
  }
}
