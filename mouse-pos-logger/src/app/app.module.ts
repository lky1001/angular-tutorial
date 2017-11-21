import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MySpecialLoggerService } from './my-special-logger.service';

import { AppComponent } from './app.component';
import { MouseTrackZoneComponent } from './mouse-track-zone/mouse-track-zone.component';
import { LogLevel } from './log-level.enum';


@NgModule({
  declarations: [
    AppComponent,
    MouseTrackZoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MySpecialLoggerService,
    {
      // provide는 의존성 주입기가 Injectable에 선언된 내용에 따라 주입해줄 대상
      // 위의 MySpecialLoggerService도 ==> { provide: MySpecialLoggerService, useClass: MySpecialLoggerService }
      provide: 'logLevel',
      // ClassProvider, ValuePProvider, ExistingProvider, FactoryProvider, TypeProvider가 있음
      useValue: LogLevel.INFO
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
