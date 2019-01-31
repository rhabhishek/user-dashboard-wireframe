import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  selected = 'notes';

  isSelected(option) {
    return this.selected === option;
  }

  selectThis(option) {
    this.selected = option;
  }
}
