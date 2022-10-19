import {MoviesList} from "./Components/MoviesList/MoviesList";
import {Header} from "./Components/Header/Header";

import {Route, Routes} from "react-router-dom";
import TestSearch from "./TestSearch/TestSearch";



function App() {
    return (


        <div>

            {/*<div>*/}
            {/*    <Header/>*/}
            {/*</div>*/}

            <div>
                <TestSearch/>
                {/*<Routes>*/}
                {/*    <Route path={'/'} element={<MoviesList/>}/>*/}
                {/*</Routes>*/}
            </div>


        </div>


    );
}

export default App;
