import {useDispatch, useSelector} from "react-redux";
import {genresActions} from "../../../redux/slices/Genres.slice";
import {useEffect, useState} from "react";
import {Genre} from "./Genre";
import css from "./genres.module.css"

const GenresList = () => {

    const {genres} = useSelector(state => state.genresReducer);
    // const {deps} = useSelector(state => state.)

    const dispatch = useDispatch()
    const [deps, setDeps] = useState(1)

    useEffect(() => {
        dispatch(genresActions.getAllGenres());
        console.log('a')
    }, [deps])


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