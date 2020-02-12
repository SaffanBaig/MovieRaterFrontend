import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/api/movies/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token cda38e1d2afac43039311fcf243d44edd3fc0cb9'
  });

  constructor(
    private httpClient: HttpClient
  ) { }

  getMovies(){
    return this.httpClient.get(this.baseUrl, {headers: this.headers});
  }
}
