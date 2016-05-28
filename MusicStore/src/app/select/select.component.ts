import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as md from '../angular-material/index'

@Component({
  moduleId: module.id,
  selector: 'ms-select',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.css'],
  directives: [
    md.MD_INPUT_DIRECTIVES,
    md.MD_LIST_DIRECTIVES,
    md.MdList,
    md.MdListItem,
    md.MdCard,
    md.MD_ICON_DIRECTIVES,
    md.MdIcon
  ]
})
export class SelectComponent implements OnInit {
  @Input() items;
  @Output() selected = new EventEmitter();

  showList:boolean = false;
  selectedItem: any;
  
  constructor() { }

  ngOnInit() {
  }
  
  toggle(showList) {
    this.showList = !showList
  }

  onSelect(item) {
    this.selectedItem = item;
    console.log(this.selectedItem);
    
    this.toggle(this.showList);
    this.selected.next(item);
  }

}
