import { Component } from '@angular/core';
import { WishItem } from './models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wishlist';
  wishList: WishItem[] = [
    { id: 1, wish: 'Learn Angular', isComplete: true },
    { id: 2, wish: 'Learn Spring Boot', isComplete: false },
    { id: 3, wish: 'Get a cup of coffee', isComplete: true },
  ];
  // wishList: WishItem[] = [];

  toggleWish(wishObj: WishItem) {
    console.log(`clicked`);
    console.log(`init`);
    console.log(wishObj);
    wishObj.isComplete = !wishObj.isComplete;
    console.log(wishObj);
    console.log(`end`);
  }
}
