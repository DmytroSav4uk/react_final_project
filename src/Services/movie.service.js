import {axiosGetPosters, axiosInstance} from "./axios.service";
import {urls} from "../Config/urls/urls";
import axios from "axios";

const movieService ={
  getPage:(page)=> axiosInstance(urls.movies+page),
  getPoster:(backdrop_path)=> axiosGetPosters(urls + backdrop_path)
}

export {movieService}