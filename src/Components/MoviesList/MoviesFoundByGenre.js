import {useSelector} from "react-redux";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from "./movieList.module.css";


const MoviesFoundByGenre = () => {

    const {moviesByGenre} = useSelector(state => state.genresReducer)

    return (
        <div className={css.foundMoviesByGenre}>
            {moviesByGenre.results?.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>

    )
}
export {MoviesFoundByGenre}