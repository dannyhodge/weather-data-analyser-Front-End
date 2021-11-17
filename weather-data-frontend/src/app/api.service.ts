import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Station } from 'src/models/station';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //put key here when its added
  constructor(private httpClient: HttpClient) { }

  public getTempData(months: Number){
    return this.httpClient.get(`http://localhost:3000/alltempdata?months=${months}`);
  }

  public getStationGeoms(): Observable<Station[]> {
    return this.httpClient.get<Station[]>(`http://localhost:3000/stationgeodata`);
  }
}
