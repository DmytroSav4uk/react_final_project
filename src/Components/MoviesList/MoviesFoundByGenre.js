import {useSelector} from "react-redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

const MoviesFoundByGenre = () =>{

    const {genres} = useSelector(state => state.genresReducer)

    return(
        <div>
            {genres.results?.map(movie => <MoviesListCard key={movie.id} movie={movie} />)}
        </div>
    )
}
export {MoviesFoundByGenre}