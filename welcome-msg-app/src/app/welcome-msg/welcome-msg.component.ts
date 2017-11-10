import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomeMsgComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
