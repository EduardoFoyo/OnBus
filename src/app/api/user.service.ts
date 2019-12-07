import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
//import { Student } from '../models/student';
import { retry, catchError } from 'rxjs/operators';

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  // API path
  url = '192.168.56.1/OnBusApi/public/api/get/bus';
 
  constructor(private http: HttpClient) { }
 
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  // searchData(title: string, type: SearchType): Observable<any> {
  //   return this.http.get(this.url).pipe(map(results => results['Search']));
  // }
 
  // /**
  // * Get the detailed information for an ID using the "i" parameter
  // * 
  // * @param {string} id imdbID to retrieve information
  // * @returns Observable with detailed information
  // */
  // getDetails(id) {
  //   return this.http.get(url);
  // }
 
 
}


