import {genresActions} from "../../../redux/slices/Genres.slice";
import {useDispatch} from "react-redux";

const Genre = ({genre}) => {

    const {id, name} = genre
    const dispatch = useDispatch();

    const SearchByGenre = async (id) => {

        dispatch(genresActions.searchMovieByGenreId(id));
       //  data.preventDefault()
    }
    return (
        <div>
            <input onChange={() => SearchByGenre(id)} type={"radio"} name={name} id={id}></input>
            <label htmlFor={id}>{name}</label>
        </div>
    )
}


export {Genre};