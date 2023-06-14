import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stok-elements',
  templateUrl: './stok-elements.component.html',
  styleUrls: ['./stok-elements.component.css']
})
export class StokElementsComponent implements OnInit {
  @Input() config = {};

  constructor() { }

  ngOnInit(): void {
  }

}
