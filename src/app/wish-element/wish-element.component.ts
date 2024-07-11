import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-wish-element',
  templateUrl: './wish-element.component.html',
  styleUrls: ['./wish-element.component.css'],
})
export class WishElementComponent {
  @Input() wishText!: string;
  @Input() isFulfilled!: boolean;
  @Output() isFulfilledChange = new EventEmitter<boolean>();

  handleFulFilledChange() {
    console.log(`handle fulfilled change status`);
    this.isFulfilled = !this.isFulfilled;
    this.isFulfilledChange.emit(this.isFulfilled);
  }

  get cssClasses() {
    // return ['strikeout', 'fulfilled-color'];
    return {
      'strikeout fulfilled-color': this.isFulfilled,
    };
  }
}
