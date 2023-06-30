import { Component, OnInit } from '@angular/core';
import {MockNewCardsData, MockOldOrderCardsData, MockStockCardsData} from "../../../mock/stock-cards";
declare var ymaps:any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public map :any;
  mockForStockCards = MockStockCardsData;
  mockForNewCards = MockNewCardsData;
  mockOldOrderCardsData = MockOldOrderCardsData;

  constructor() { }

  ngOnInit() {
    ymaps.ready().then(() => {
      this.map = new ymaps.Map('map', {
        center: [50.450100, 30.523400],
        zoom: 12
      });
    });
  }

}
