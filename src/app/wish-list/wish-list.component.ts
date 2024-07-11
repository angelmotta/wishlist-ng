import { Component, Input } from '@angular/core';
import { WishItem } from 'src/app/models/wishItem';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent {
  @Input({ required: true }) wishList: WishItem[] = [];

  toggleWishStatus(wishObj: WishItem) {
    console.log(`clicked`);
    console.log(wishObj);
    wishObj.isComplete = !wishObj.isComplete;
    console.log(wishObj);
    console.log(`end`);
  }
}
