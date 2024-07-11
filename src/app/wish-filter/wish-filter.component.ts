import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css'],
})
export class WishFilterComponent {
  @Input() filterStatus!: string;
  @Output() filterStatusChange = new EventEmitter<string>();

  handleFilterStatusChange(filterSelection: string) {
    console.log(`update filter selection: ${filterSelection}`);
    this.filterStatusChange.emit(filterSelection);
  }
}
