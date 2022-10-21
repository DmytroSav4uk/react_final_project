import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


import {movieActions} from "../../redux/slices/Movie.slice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {MovieListSearchCard} from "../MoviesListCard/MovieListSearchCard";
import ReactPaginate from "react-paginate";
import css from "./movieList.module.css"
import {genresActions} from "../../redux/slices/Genres.slice";

function MoviesList() {

    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movieReducer);
    let currentPage = 1;

    useEffect(() => {
        dispatch(movieActions.getPage(currentPage));
    }, [dispatch, currentPage])

    const handlePageChange = (page) => {
        dispatch(movieActions.getPage(page.selected + 1))
    }

    if (movies != null && movies.results != null && movies.results.length > 0 && movies.results[0].title != null)
        return (
            <div>
                <div className={css.movies}>
                    {movies.results.map(movie => <MoviesListCard key={movie.id} movie={movie} />)}
                </div>
                <div className={css.paginatorWrap}>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next"
                        onPageChange={handlePageChange}
                        pageRangeDisplayed={5}
                        pageCount={500}
                        previousLabel="previous"
                        renderOnZeroPageCount={null}
                        containerClassName={css.pagination}
                        subContainerClassName={css.pagination}
                        activeClassName={css.active}
                        forcePage={currentPage.selected}
                    />
                </div>
            </div>)
    else if (movies != null && movies.results != null && movies.results.length > 0 && movies.results[0].title == null)
        return (
            <div>
                <div className={css.upText}>
                    <h1>List of found movies</h1>
                                  </div>
                <div className={css.searchResults}>
                    {movies.results.map(movie => <MovieListSearchCard key={movie.id} searchMovie={movie}/>)}
                </div>

                <div className={css.paginatorWrap}>
                </div>
            </div>)
    else
        return (
            <div className={css.noFilms}>
                <h1>Sorry,No Films found</h1>
            </div>
        )
}

export {MoviesList}