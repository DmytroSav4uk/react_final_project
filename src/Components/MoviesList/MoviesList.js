import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";


import {movieActions} from "../../redux/slices/Movie.slice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieService} from "../../Services/movie.service";
import {MovieListSearchCard} from "../MoviesListCard/MovieListSearchCard";
import ReactPaginate from "react-paginate";
import css from "./movieList.module.css"


function MoviesList()  {

    const dispatch = useDispatch();
    const {movies, error, loading} = useSelector(state => state.movieReducer);
  //  const {searchMovies} = useSelector(state => state.movieReducer)



    let [currentPage, setCurrentPage] = useState(1);
    let [query, setQuery] = useState('')


const search =(query) =>
{
    movieService.searchMovie(query);
}

    const foo = "<";

    useEffect(() => {
        dispatch(movieActions.getPage(currentPage));
    }, [dispatch, currentPage])



const handlePageChange = (page) =>{
        dispatch(movieActions.getPage(page.selected +1))
}


    if(movies != null && movies.results != null && movies.results.length>0 && movies.results[0].title != null )
        return (
            <div>
                <div className={css.paginatorWrap}>   <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageChange}
                    pageRangeDisplayed={5}
                    pageCount={movies.total_pages}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    containerClassName={css.pagination}
                    subContainerClassName={css.pagination}
                    activeClassName={css.active}
                />
                </div>
                <div className={css.movies}>
                    {movies.results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
                </div>
                <div className={css.paginatorWrap}>

                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageChange}
                        pageRangeDisplayed={5}
                        pageCount={movies.total_pages}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        containerClassName={css.pagination}
                        subContainerClassName={css.pagination}
                        activeClassName={css.active}
                    />
                </div>
            </div>)
    else if(movies != null && movies.results != null && movies.results.length>0 && movies.results[0].title == null )
        return (
            <div>


                <div>
                    <div className={css.paginatorWrap}>   <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageChange}
                        pageRangeDisplayed={5}
                        pageCount={movies.total_pages}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        containerClassName={css.pagination}
                        subContainerClassName={css.pagination}
                        activeClassName={css.active}
                    />
                    </div>
                    <h1>List of found movies</h1>
                </div>
                <div className={css.searchResults}>
                    {movies.results.map(movie => <MovieListSearchCard key={movie.id} searchMovie={movie}/>)}
                </div>
                <div className={css.paginatorWrap}>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageChange}
                        pageRangeDisplayed={5}
                        pageCount={movies.total_pages}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        containerClassName={css.pagination}
                        subContainerClassName={css.pagination}
                        activeClassName={css.active}
                    />
                </div>
            </div>)
            else
                return (



                    <div>

                        <p>No Films found</p>
                        <button onClick={()=> dispatch(movieActions.getPage(currentPage))}>Back to list</button>
                    </div>

                )

}

export {MoviesList}