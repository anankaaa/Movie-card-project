import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent<T extends {[x: string]: any}> implements OnInit {
  @Output() movies: Movie[] = [];
  @Input() pageSize: number = 20;
  currentPage: number = 1;
  @Input() list: T[] = [];

  movieList$!: Observable<Movie[]>;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieList$ = this.movieService.getAll();
  }

  getPageNumbers(): number[] {
    const pageCount: number = Math.ceil(this.movies.length / this.pageSize);
    let nums: number[] = [];
    for (let i = 0; i < pageCount; i++) {
      nums[i] = i +1;
    }

    return nums;
  }

  jumpToPage(pageNum: number): void {
    this.currentPage = pageNum;
  }

}
