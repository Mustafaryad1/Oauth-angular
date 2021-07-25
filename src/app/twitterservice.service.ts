import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwittereService {

  api_url = 'http://localhost:5000';

  constructor(private http: HttpClient) {}
  getHomeData(){
    return this.http.get<any>(this.api_url)
  }
}
