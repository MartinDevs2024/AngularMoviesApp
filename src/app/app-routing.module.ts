import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesDetailsComponent } from "./components/movies-details/movies-details.component";
import { MoviesComponent } from "./components/movies/movies.component";

const routes: Routes =[
   { path: '', component: MoviesComponent},
   { path: 'movies/:id', component: MoviesDetailsComponent},
   { path: '**', component: MoviesComponent, pathMatch: 'full'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
