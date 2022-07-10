import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinct, filter, map, switchMap } from 'rxjs/operators';
import { Movie } from 'src/app/_models/movie';
import { MovieService } from 'src/app/_services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit{
  movies: Movie[] = [];
  @ViewChild('movieSearchInput', {static: true }) movieSearchInput!: ElementRef
  movieSubscription!: Subscription

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    fromEvent<Event>(this.movieSearchInput.nativeElement, 'keyup').pipe(
      map((event: Event) => {
        const searchTerm = (event.target as HTMLInputElement).value;
        return searchTerm
      }),
      filter((searchTerm: string) => searchTerm.length > 3),
      debounceTime(500),
      distinct(),
      switchMap((searchTerm: string) => this.movieService.getMovies(searchTerm))
    ).subscribe((movies: Movie[]) => {
      this.movies = movies !== undefined ? movies : [];
    })
  }


   ngOnDestroy() : void {
    this.movieSubscription.unsubscribe();
   }
}
