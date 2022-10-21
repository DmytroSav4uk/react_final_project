import {storeSetSearch} from "../../../redux/store";
import {genresActions} from "../../../redux/slices/Genres.slice";
import {useDispatch} from "react-redux";

const Genre = ({genre}) => {

    const {id, name} = genre
    const dispatch = useDispatch();

    const SearchByGenre = async (data) => {
        storeSetSearch(data.checked);
        dispatch(genresActions.searchMovieByGenreId(data.checked));
    }


    return (
        <div>
            <input onChange={()=>SearchByGenre(genre.id)}  type={"checkbox"} name={name} id={id}></input>
            <label htmlFor={id}>{name}</label>
        </div>
    )
}


export {Genre};