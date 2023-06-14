import { Component, OnInit } from '@angular/core';
import {MockStockCardsData} from "../../../mock/stock-cards";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  mockForStockCards = MockStockCardsData;

  constructor() { }

  ngOnInit(): void {
  }

}
