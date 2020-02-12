import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _movies = ['terminator', 'predator'];
  constructor() { }

  getMovies(){
    return this._movies;
  }
}
