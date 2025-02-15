import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventService } from 'src/app/services/EventServices';
import { WishItem } from '../models/wishItem';

@Component({
  selector: 'app-wish-element',
  templateUrl: './wish-element.component.html',
  styleUrls: ['./wish-element.component.css'],
})
export class WishElementComponent {
  @Input() wishObj!: WishItem;

  constructor(private eventService: EventService) {}

  handleFulFilledChange() {
    console.log(`handle fulfilled change status`);
    // this.isFulfilled = !this.isFulfilled;
    // this.isFulfilledChange.emit(this.isFulfilled);
    this.wishObj.isComplete = !this.wishObj.isComplete;
  }

  get cssClasses() {
    // return ['strikeout', 'fulfilled-color'];
    return {
      'strikeout fulfilled-color': this.wishObj.isComplete,
    };
  }

  handleRemoveWish() {
    console.log(`handle remove wish: emit event for --> ${this.wishObj}`);
    this.eventService.emit('removeWishEvent', this.wishObj);
  }
}
