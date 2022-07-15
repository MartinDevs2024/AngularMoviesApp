import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/_models/movie';
import { MovieService } from 'src/app/_services/movie.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
  movie: Movie;

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMovie();
  }

  loadMovie() {
    this.movieService.getMovie(this.route.snapshot.paramMap.get('id')).subscribe(movie => {
      this.movie = movie;
      console.log(movie);
    })
  }



}
