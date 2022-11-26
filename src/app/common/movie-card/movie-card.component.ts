import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie = new Movie();

 movieList$: Observable<Movie[]>  = this.movieService.getAll();

  constructor(
    private movieService: MovieService
  ) {}

  ngOnInit(): void {}

  onDelete(movie: Movie): void {
    this.movieService.remove(movie).subscribe(movie => this.movieList$ = this.movieService.getAll());
  }
}
