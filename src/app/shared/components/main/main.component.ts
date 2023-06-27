import { Component, OnInit } from '@angular/core';
import {MockNewCardsData, MockOldOrderCardsData, MockStockCardsData} from "../../../mock/stock-cards";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  mockForStockCards = MockStockCardsData;
  mockForNewCards = MockNewCardsData;
  mockOldOrderCardsData = MockOldOrderCardsData;

  constructor() { }

  ngOnInit(): void {
  }

}
