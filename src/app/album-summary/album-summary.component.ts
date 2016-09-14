import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../models';

@Component({
  selector: 'app-album-summary',
  templateUrl: './album-summary.component.html',
  styleUrls: ['./album-summary.component.css']
})
export class AlbumSummaryComponent implements OnInit {
  
  @Input() album: Album;
  
  constructor() { }

  ngOnInit() {
  }

}
