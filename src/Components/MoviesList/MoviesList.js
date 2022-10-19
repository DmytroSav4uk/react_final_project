import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";


import {movieActions} from "../../redux/slices/Movie.slice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";


const MoviesList = () => {

    const dispatch = useDispatch();


    const {movies, error, loading} = useSelector(state => state.movieReducer);
    let [currentPage, setCurrentPage] = useState(1);
    let [query, setQuery] = useState('');                                                                      


    const pageIncrease = () => {
        console.log("++")
        setCurrentPage(currentPage + 1);
    }

    const pageIncrease5 = () => {
        console.log("++")
        setCurrentPage(currentPage + 5);

    }

    const pageDecrease = () => {
        console.log("--");
        setCurrentPage(currentPage - 1)
    }


    const pageDecrease5 = () => {
        console.log("--");
        setCurrentPage(currentPage - 5)
    }


    useEffect(() => {
        dispatch(movieActions.getPage(currentPage));
    }, [dispatch,currentPage])


    const foo = "<";


    return (
        <div>
            <div>
                {movies.results?.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            <div>
                <button disabled={currentPage <= 1} onClick={pageDecrease}> {foo}  </button>
                <button disabled={currentPage <= 6} onClick={pageDecrease5}> -5</button>
                <p>{currentPage}</p>
                <button disabled={currentPage >= 500} onClick={pageIncrease}> ></button>
                <button disabled={currentPage >= 494} onClick={pageIncrease5}> +5</button>
            </div>
        </div>
    )
}

export {MoviesList}