import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getOnePlusItems(id):Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/users/${id}`, options)
      .toPromise();
  }

  reviews(id):Promise<any>{
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/users/${id}/reviews`, options)
      .toPromise();
  }
}



  

  

  