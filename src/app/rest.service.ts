import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  apiUrl = '192.168.56.1/OnBusApi/public/api/get/bus';

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
    let a = this.getUsers();
  }

  getUsers() {
    
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
        console.log(data);
        
      }, err => {
        console.log(err);
      });
    });
  }


}
