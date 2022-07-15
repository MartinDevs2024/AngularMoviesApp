import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../_models/apiResponse';
import { Movie } from '../_models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private API_URL: string = 'http://www.omdbapi.com/?';
  private API_KEY: string = '&apikey=c81f2547';
  constructor(private http: HttpClient) { }

  getMovies(searchTerm: string):Observable<Movie[]>{
      return this.http.get<ApiResponse>(`${this.API_URL}&s=${searchTerm}${this.API_KEY}`).pipe(
        map(response => {
          return response.Search;
        })
      )
  }

  getMovie(id: string):Observable<Movie> {
    return this.http.get<Movie>(`${this.API_URL}i=${id}${this.API_KEY}`)
  }
}
