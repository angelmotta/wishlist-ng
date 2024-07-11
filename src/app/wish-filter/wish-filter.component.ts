import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css'],
})
export class WishFilterComponent {
  filterStatus = '0';
  @Output() filterStatusEvent = new EventEmitter<string>();

  sendFilterStatusEvent(filterSelection: string) {
    this.filterStatusEvent.emit(filterSelection);
  }
}
