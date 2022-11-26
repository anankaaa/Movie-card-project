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

  constructor() {}

  ngOnInit(): void {}

  onDelete(movie: Movie): void {
    this.deleteMovieEvent.emit(movie);
  }
}
