import {axiosInstance} from "./axios.service";
import {urls} from "../Config/urls/urls";

const genreService = {
    getAll:()=>axiosInstance(urls.genres),
    getMoviesByGenreId:(id)=>axiosInstance(urls.moviesByGenre + id)
}

export {genreService}