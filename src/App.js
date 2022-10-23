import {MoviesList} from "./Components/MoviesList/MoviesList";
import {Header} from "./Components/Header/Header";
import {store} from "./redux/store";
import {MovieDetails} from "./Components/MovieDetails/MovieDetails";
import {genresActions} from "./redux/slices/Genres.slice";
import css from "./app.module.css"


import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {MoviesFoundByGenre} from "./Components/MoviesList/MoviesFoundByGenre";

function App() {
    const {genres} = useSelector(state => state.genresReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresActions.getAllGenres())
    }, [])

    let prevSearch = '';

    store.subscribe(() => {
        const state = store.getState();
        const newSearch = state.movieReducer.search.trim();
        if (newSearch !== prevSearch) {
            if (newSearch === '') {
                console.log('Do regular movie load')
            } else {
                console.log('Run search for: ' + newSearch);
            }
            prevSearch = newSearch;
        }
    });

    if (genres.genres == null) {
        return ''
    } else





        return (
            <div className={css.father}>
                <div className={css.backgroundImage}>
                    <img src={'https://images8.alphacoders.com/944/thumb-1920-944311.jpg'}/>

                </div>
                <div className={css.center}>
                    <div>
                        <Header/>
                    </div>

                    <div>

                        <div className={css.genreMovies}>
                            <Routes>
                                <Route path={'/'} element={<MoviesFoundByGenre/>}/>
                            </Routes>
                        </div>

                        <Routes>
                            <Route path={'/'} element={<MoviesList/>}/>
                            <Route path={'/movie/details/'} element={<MovieDetails/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        );
}

export default App;

