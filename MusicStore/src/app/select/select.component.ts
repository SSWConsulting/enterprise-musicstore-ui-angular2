import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ms-select',
  templateUrl: 'select.component.html',
  styleUrls: ['select.component.css']
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
    this.showList = !showList;
  }

  onSelect(item) {
    this.selectedItem = item;
    console.log(this.selectedItem);

    this.toggle(this.showList);
    this.selected.next(item);
  }

}
