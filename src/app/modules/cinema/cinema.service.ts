import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get('https://user-train.herokuapp.com/cinema/movies');
  }

  getMovieById(id: string) {
    return this.http.get('https://user-train.herokuapp.com/cinema/movie/' + id);
  }
}
