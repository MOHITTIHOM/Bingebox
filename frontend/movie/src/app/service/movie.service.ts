import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class MovieService {
  private MyAPIKey: string = "bcdeceac155749361eceaa88274a7aac";  // key expired, get your own key from https://www.themoviedb.org/settings/api
  
 constructor(private http: HttpClient,private router:Router) {}
  movieName:string | undefined;
  movieInfo: any;
  currentPage:number=1;
  recommendedMovieId:any;
  email:any;
  favMovieObj:any={};
  search=document.getElementById('search');
   selectedMovie(data: any) {
    this.movieInfo = data;
    this.router.navigate(['/dashboard/movie-info']);
  }





  //to get all the favourite movies from the Api by Movie Id.
  getAllFavouriteMoviesFromApi(movieId:number){
    let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.MyAPIKey}&append_to_response=credits`;
    return this.http.get<any>(url);
  }
  searchMovies(searchStr: string){
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.MyAPIKey}&query=${searchStr}`);
  }

  upcoming(){
    return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.MyAPIKey}&language=en-US&page=1`);
  }

  tvshows(){
    return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.MyAPIKey}&language=en-US&page=1`);
  }

  popular(){
    return this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.MyAPIKey}&language=en-US&page=1`);
  }
  
  // To display all Movies
  getAllMovies(currentPage:number) {
    let url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${this.MyAPIKey}&page=${currentPage}`;
    return this.http.get<any>(url);
  }

  // get one movie details
  getParticularMovieDetails(movieId:number)
  {
    let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.MyAPIKey}&append_to_response=credits`;
    return this.http.get<any>(url);
  }

  addMovieToFavourites(movieId:number,movieName:any){
    this.favMovieObj.movieId=movieId;
    this.favMovieObj.movieName=movieName;
    this.favMovieObj.email=this.email;
    console.log(this.favMovieObj);
    return this.http.post("http://localhost:8082/api/v4/favourite",this.favMovieObj);
  }
  getFavouriteMoviesByEmail()
  {
    return this.http.get("http://localhost:8082/api/v4/favourite/"+this.email)
  }
  deleteFavouriteMovie(delMovieId:String){
    return this.http.delete("http://localhost:8082/api/v4/deleteFavourite/"+delMovieId+"/"+this.email);
  }
}
