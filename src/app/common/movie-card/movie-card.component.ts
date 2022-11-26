import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() deleteMovieEvent = new EventEmitter<Movie>();

 movieList$!: Observable<Movie[]>;

  constructor(
    private movieService: MovieService
  ) {}

  ngOnInit(): void {}

  onDelete(movie: Movie): void {
    console.log(movie);
    this.deleteMovieEvent.emit(movie);
    /* this.movieService.remove(movie).subscribe(movie => this.movieList$ = this.movieService.getAll()); */
  }
}
