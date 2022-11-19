import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { MovieListComponent } from './page/movie-list/movie-list.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movie-list',
    component: MovieListComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
