import {MoviesList} from "./Components/MoviesList/MoviesList";
import {Header} from "./Components/Header/Header";
import {store} from "./redux/store";
import {MovieDetails} from "./Components/MovieDetails/MovieDetails";
import {genresActions} from "./redux/slices/Genres.slice";

import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {MoviesFoundByGenre} from "./Components/MoviesList/MoviesFoundByGenre";

function App() {
    const {genres} = useSelector(state => state.genresReducer)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(genresActions.getAllGenres())
     },[genres.genres])

    let prevSearch = '';

    store.subscribe(() => {
        const state = store.getState();
        const newSearch = state.movieReducer.search.trim();
        if( newSearch !== prevSearch)
        {
            if( newSearch === '')
            {
                console.log('Do regular movie load')
            }
            else
            {
                console.log('Run search for: ' + newSearch);
            }
            prevSearch = newSearch;
        }
    });

    if (genres.genres == null){
        return ''
    }
    else

    return (
        <div>
            <div>
                <Header/>
                <MoviesFoundByGenre/>
            </div>

            <div>
                <Routes>
                    <Route path={'/'} element={<MoviesList/>}/>
                    <Route path={'/movie/details/'} element={<MovieDetails/>}/>
                </Routes>



            </div>
        </div>
    );
}

export default App;
