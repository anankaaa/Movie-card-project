import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';

interface ITableColumn {
  title: string;
  key: string;
}

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
  filterKey: string = '';

  //sorter
  sorterKey: string = '';

  //paginator
  @Input() pageSize: number = 20;
  currentPage: number = 1;
  pageNumberState: boolean = false;
  pageCount: number = 0;

  movieList$: Observable<Movie[]> =  this.movieService.getAll();

  constructor(
    private movieService: MovieService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
    ) { }


  //filter
  ngOnInit(): void {

    this.spinner.show();


    fetch('https://nettuts.hu/jms/anankaaa/cinema')
      .then(
        response => response.json(),
      ).then(
        list => this.movies = list,
      ).finally(() =>this.spinner.hide());
  }

  //paginator

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

  //filter

  columns: ITableColumn[] = [
    {
      key: 'title',
      title: 'Title',
    },
    {
      key: 'genre',
      title: 'Category',
    },
    {
      key: 'releaseYear',
      title: 'ReleaseYear',
    },
    {
      key: 'studio',
      title: 'Studio',
    }

  ];

  searchColumns: ITableColumn[] = [];

  //sorter

  onSorter (key: string): void {
    this.sorterKey = key
  }

  onDelete(event: any){
    this.movieService.remove(event).subscribe(movie => this.movieList$ = this.movieService.getAll());
    this.toastr.warning('Movie Card deleted!')
  }
}
