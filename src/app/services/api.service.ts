import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WishItem } from '../models/wishItem';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:3000/wishes';
  constructor(private http: HttpClient) {}

  private getStandardOption(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  getAllWishes() {
    // return this.http.get('assets/wishes.json');
    let httpOptions = this.getStandardOption();
    return this.http.get(this.baseUrl, httpOptions);
  }

  addWish(wishObj: WishItem) {
    let httpOptions = this.getStandardOption();
    // httpOptions.headers = httpOptions.headers.set(
    //   'Authorization',
    //   'Bearer xyz'
    // );
    return this.http.post(this.baseUrl, wishObj);
  }
}
