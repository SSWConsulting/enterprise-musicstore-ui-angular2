import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as md from './../angular-material/index';


@Component({
  moduleId: module.id,
  selector: 'ms-home',
    encapsulation: ViewEncapsulation.None,
  directives: [md.MdToolbar, md.MdButton, md.MdIcon],
  template: `
    <p>
      home Works!
    </p>
   
  `,
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
