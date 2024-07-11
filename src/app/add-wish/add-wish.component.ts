import { Component, EventEmitter, Output } from '@angular/core';
import { WishItem } from '../models/wishItem';

@Component({
  selector: 'app-add-wish',
  templateUrl: './add-wish.component.html',
  styleUrls: ['./add-wish.component.css'],
})
export class AddWishComponent {
  newWishInput: string = '';
  @Output() addNewWish = new EventEmitter<WishItem>();

  SendNewWishEvent() {
    const newWish: WishItem = {
      wish: this.newWishInput,
      isComplete: false,
    };
    this.addNewWish.emit(newWish);
    this.newWishInput = '';
  }
}
