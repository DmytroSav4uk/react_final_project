import {MoviesList} from "./Components/MoviesList/MoviesList";
import {Header} from "./Components/Header/Header";

import {Route, Routes} from "react-router-dom";
import {FoundMovies} from "./Components/FoundMoviePage/FoundMovies";


function App() {
    return (


        <div>

            <div>
                <Header/>
            </div>

            <div>
                <Routes>
                    <Route path={'/'} element={<MoviesList/>}/>
                    <Route path={'/search/movies'} element={<FoundMovies/>}/>}
                </Routes>
            </div>


        </div>


    );
}

export default App;
