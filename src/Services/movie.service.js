import {axiosGetPosters, axiosInstance} from "./axios.service";
import {urls} from "../Config/urls/urls";
import axios from "axios";

const movieService ={
  getPage:(page)=> axiosInstance(urls.movies+page),
  //getPoster:(backdrop_path)=> axiosGetPosters + backdrop_path
  searchMovie:(data)=>axiosInstance(urls.searchMovies+data)
}

export {movieService}