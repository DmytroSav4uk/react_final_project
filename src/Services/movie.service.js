import {axiosInstance} from "./axios.service";
import {urls} from "../Config/urls/baseURL";

const movieService ={

  getAll:()=> axiosInstance(urls.movies)


}

export {movieService}