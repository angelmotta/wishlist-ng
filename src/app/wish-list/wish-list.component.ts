import { Component, Input } from '@angular/core';
import { WishItem } from 'src/app/models/wishItem';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent {
  @Input({ required: true }) wishList: WishItem[] = [];
}
