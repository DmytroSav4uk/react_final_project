import {axiosInstance} from "./axios.service";
import {urls} from "../Config/urls/urls";

const movieService ={
  getPage:(page)=> axiosInstance(urls.movies+page),
  searchMovie:(query)=> axiosInstance(urls.searchMovies + query),
  getOneMovie:(id)=>axiosInstance(urls.oneMovie + id + "?")
}

export {movieService}