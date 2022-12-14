import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Genre} from "./Genre";
import css from "./genres.module.css"
import {genresActions} from "../../../redux/slices/Genres.slice";

const GenresList = () => {

    const {genres} = useSelector(state => state.genresReducer);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(genresActions.getAllGenres());
    }, [])


    return (
        <div className={css.dropdown}>
            <button className={css.dropbtn}>Genres List</button>
            <div className={css.dropdownContent}>
                {genres.genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>
        </div>

    )
}


export {GenresList};
