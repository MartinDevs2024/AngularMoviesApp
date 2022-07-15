import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CardMovieComponent,
    MoviesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
