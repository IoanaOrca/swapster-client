import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment'; 

@Injectable()
export class ItemService {

  private baseUrl = environment.apiUrl;  // OR + '/items'
  // private baseUrl = 'http://localhost:3000';

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

  update(item):Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${this.baseUrl}/items/${item._id}`, item, options)
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

  sellItem(id){
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${this.baseUrl}/items/${id}/sell`, options)
      .toPromise()
  }

}
