import { Component, Input } from '@angular/core';
import { WishItem } from '../models/wishItem';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent {
  @Input({ required: true }) wishList: WishItem[] = [];
  @Input({ required: true }) toggleWishStatus!: (wishObj: WishItem) => void;

  updateStatus(wishObj: WishItem): void {
    this.toggleWishStatus(wishObj);
  }
}
