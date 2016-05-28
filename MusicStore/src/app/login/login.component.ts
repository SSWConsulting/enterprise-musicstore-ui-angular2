import { Component, OnInit } from '@angular/core';
import * as md from '../angular-material/index'

@Component({
  moduleId: module.id,
  selector: 'ms-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [
    md.MD_CARD_DIRECTIVES,
    md.MdCard
  ]
})
export class LoginComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
