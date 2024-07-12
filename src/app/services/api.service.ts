import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { WishItem } from '../models/wishItem';
import { catchError, throwError } from 'rxjs';

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

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred.
      console.error(`Oh client-side or network error ocurred: ${error.error}`);
    } else {
      // Backend API returned an unsuccessful response code.
      console.error(
        `Backend API returned code ${error.status}, body was: `,
        error.error
      );
    }

    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  getAllWishes() {
    // return this.http.get('assets/wishes.json');
    let httpOptions = this.getStandardOption();
    return this.http
      .get(this.baseUrl, httpOptions)
      .pipe(catchError(this.handleError));
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
