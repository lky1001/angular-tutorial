import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LangSelectorComponent implements OnInit {
  langCode: string;

  constructor() { 
    this.langCode = 'ko';
  }

  ngOnInit() {
  }

  setLangCode(code: string) {
    this.langCode = code;
  }
}
