import {Component, Input, OnInit} from '@angular/core';
import {StockCardInterface} from "../../interfaces/stock-card.interface";

@Component({
  selector: 'app-stok-elements',
  templateUrl: './stok-elements.component.html',
  styleUrls: ['./stok-elements.component.scss']
})
export class StokElementsComponent implements OnInit {
  @Input() config: StockCardInterface[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
