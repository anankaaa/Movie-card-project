import { Component, inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.scss'],
})
export class MovieEditorComponent implements OnInit {

  movie$: Observable<Movie> = this.activatedRoute.params.pipe(
    switchMap((params) => this.movieService.get(params['id']))
  );

  movie: Movie = new Movie;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {}

    onUpdate(form:NgForm, movie: Movie):void {
      movie.id = Number(movie.id);
      if(movie.id === 0 ){
        this.movieService.create(movie).subscribe(movie => this.router.navigate(['/', 'movie']))
      }
      this.movieService.update(movie).subscribe(movie => this.router.navigate(['/', 'movie']))
    }

    onSave(movie: Movie): void {
      this.movieService.update(movie).subscribe(movie => this.router.navigate(['/movie-list']))
    }
}
