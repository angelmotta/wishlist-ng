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
  // filteredList = this.wishList;
  get filteredList() {
    if (this.filterStatus === '0') {
      // All selected
      return this.wishList;
    } else if (this.filterStatus === '1') {
      // Unfulfilled selected
      return this.wishList.filter((wishObj) => wishObj.isComplete === false);
    } else if (this.filterStatus === '2') {
      // fullfilled selected
      return this.wishList.filter((wishObj) => wishObj.isComplete === true);
    } else {
      // All elements (should not happen)
      console.log(`filtered list: something went wrong`);
      return this.wishList;
    }
  }
  newWish = '';
  filterStatus = '0';

  toggleWish(wishObj: WishItem) {
    console.log(`clicked`);
    console.log(wishObj);
    wishObj.isComplete = !wishObj.isComplete;
    console.log(wishObj);
    console.log(`end`);
    // Update filtered elements
    // this.handleFilterChange();
  }

  addNewWish() {
    if (!this.newWish) {
      alert(`wish can not be blank`);
      return;
    }
    const newUserWish: WishItem = {
      wish: this.newWish,
      isComplete: false,
    };
    this.wishList.push(newUserWish);
    this.newWish = '';
    // Update filtered elements
    // this.handleFilterChange();
  }

  // handleFilterChange() {
  //   console.log(`filter changed: ${this.filterStatus}`);
  //   if (this.filterStatus === '0') {
  //     // All selected
  //     this.filteredList = this.wishList;
  //   } else if (this.filterStatus === '1') {
  //     // Unfulfilled selected
  //     this.filteredList = this.wishList.filter(
  //       (wishObj) => wishObj.isComplete === false
  //     );
  //   } else if (this.filterStatus === '2') {
  //     // fullfilled selected
  //     this.filteredList = this.wishList.filter(
  //       (wishObj) => wishObj.isComplete === true
  //     );
  //   }
  // }
}
