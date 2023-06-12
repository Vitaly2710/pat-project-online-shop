import {Component, Input, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() size = 0;

  @Input() label = '';

  @Input() showBurger = false;

  ngOnInit(): void {
  }

}
