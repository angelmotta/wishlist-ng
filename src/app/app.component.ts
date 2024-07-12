import { Component } from '@angular/core';
import { WishItem } from './models/wishItem';
import { EventService } from 'src/app/services/EventServices';
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
  filterSelected = '0';

  constructor(private eventService: EventService) {
    this.eventService.listen('removeWishEvent', (wishObj) => {
      //Todo: remove wish
      console.log(`AppComponent listened: removeWishEvent`);
      console.log(wishObj);
      const idxObjToDelete = this.wishList.indexOf(wishObj);
      this.wishList.splice(idxObjToDelete, 1);
    });
  }

  getFilteredList() {
    if (this.filterSelected === '0') {
      // All selected
      return this.wishList;
    } else if (this.filterSelected === '1') {
      // Unfulfilled selected
      return this.wishList.filter((wishObj) => wishObj.isComplete === false);
    } else if (this.filterSelected === '2') {
      // fullfilled selected
      return this.wishList.filter((wishObj) => wishObj.isComplete === true);
    } else {
      // All elements (should not happen)
      console.log(`filtered list: something went wrong`);
      return this.wishList;
    }
  }

  addNewWish(newUserWish: WishItem) {
    this.wishList.push(newUserWish);
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
