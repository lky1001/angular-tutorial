import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomeMsgComponent {
  title = 'app';
  userName = '';
  private valid = false;
  private static CHECK_KEYUP_WAIT_SEC = 5 * 1000;

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.logIt('OnInit');
  }

  ngDoCheck() {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.logIt('DoCheck');
  }

  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.logIt('AfterContentInit')
  }

  ngAfterContentChecked() {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.logIt('AfterContentChecked');
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const checkKeyUpFn = () => {
      if (this.valid) return;
      alert ('이름을 입력해 주세요');
    }

    setTimeout(checkKeyUpFn, WelcomeMsgComponent.CHECK_KEYUP_WAIT_SEC);
  }

  ngAfterViewChecked() {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.logIt('AfterViewChecked');
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.logIt('OnDestroy');
  }

  onKeyUp(name) {
   this.valid = name.length > 0; 
  }

  setName(name) {
    this.userName = name;
  }

  onChange() {
    this.valid = this.userName.length > 0;
  }

  logIt(msg: string) {
    console.log(msg);
  }
}
