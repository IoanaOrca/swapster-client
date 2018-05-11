import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }


  reviews(id):Promise<any>{
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.baseUrl}/user/${id}/reviews`, options)
      .toPromise();
  }
}



  

  

  