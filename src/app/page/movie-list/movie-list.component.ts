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
  @Output() movies: Movie[] | null = null;
  @Output() movie: Movie= new Movie;

  //filter
  filterPhrase: string = '';

  //paginator
  @Input() pageSize: number = 20;
  currentPage: number = 1;
  pageNumberState: boolean = false;
  pageCount: number = 0;

  movieList$!: Observable<Movie[]>;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieList$ = this.movieService.getAll();
  }

  getPageNumbers(): number[] {
    if(!this.pageNumberState){
      this.movieList$.subscribe(data => {this.movies = data})
      this.pageNumberState = true;
    }
    if((this.pageSize != 0)&&(this.movies!= null)){
    this.pageCount = Math.ceil(this.movies!.length / this.pageSize);
    let nums: number[] = [];
    for (let i = 0; i < this.pageCount; i++) {
      nums[i] = i +1;
    }

    return nums;
    console.log(nums)
  }
  else{
    return [];
  }
}

  jumpToPage(pageNum: number): void {
    this.currentPage = pageNum;
  }

  jumpPrevious(){
    if(this.currentPage>1){
      this.currentPage = this.currentPage - 1;
    }
  }

  jumpNext(){
    console.log(this.currentPage, this.pageCount)
    if(this.currentPage<this.pageCount-1){
      this.currentPage = this.currentPage + 1;

    }
  }
}
