import {MoviesList} from "./Components/MoviesList/MoviesList";
import {Header} from "./Components/Header/Header";

import {Route, Routes} from "react-router-dom";
import TestSearch from "./TestSearch/TestSearch";
import {store} from "./redux/store";

import {MovieDetails} from "./Components/MovieDetails/MovieDetails";
import {SearchForm} from "./Components/Header/Search form/SearchForm";







function App() {


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

    return (
        <div>
            <div>
                <Header/>
            </div>

            <div>
                <Routes>
                    {/*<Route path={'/'} element={ <SearchForm/>}/>*/}
                    <Route path={'/'} element={<MoviesList/>}/>
                    <Route path={'/movie/details/'} element={<MovieDetails/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
