import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //put key here when its added
  constructor(private httpClient: HttpClient) { }

  public getTempData(){
    return this.httpClient.get(`http://localhost:3000/alltempdata`);
  }
}
