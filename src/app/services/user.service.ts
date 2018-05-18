import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
// import { environment } from '../../environments/environment'; 

@Injectable()
export class UserService {

  // private baseUrl = environment.apiUrl;  OR + '/users'
  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getOnePlusItems(id):Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/users/${id}`, options)
      .toPromise();
  }

  reviews(review,id):Promise<any>{
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/users/${id}/reviews`,review, options)
      .toPromise();
  }

  getItems(id){
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/users/${id}/requests`, options)
      .toPromise()
  }

  getItemsWichAccepted(id){
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/users/${id}/itemsReceived`, options)
      .toPromise()
  } 
}



  

  

  