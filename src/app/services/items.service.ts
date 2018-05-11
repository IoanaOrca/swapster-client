import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItemService {

  baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  listAll(terms?: String):Promise<any>{
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/items?terms=${terms}`, options)
      .toPromise();
  }

  getOne(id):Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/items/${id}`, options)
      .toPromise();
  }

  add(item):Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/items`, item, options)
      .toPromise();
  }

  update(movie):Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${this.baseUrl}/items/${movie._id}`, movie, options)
      .toPromise();
  }

  deleteOne(id):Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.delete(`${this.baseUrl}/items/${id}`, options)
      .toPromise();
  }

  requestItem(id){
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${this.baseUrl}/items/${id}/apply`, null, options)
      .toPromise()
  }
}
