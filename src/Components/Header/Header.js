import {SearchForm} from "./Search form/SearchForm";
import css from "./header.module.css"
import icon from "../Icon/icon.png"
import {Route, Routes} from "react-router-dom";
import {MoviesList} from "../MoviesList/MoviesList";
import {MovieDetails} from "../MovieDetails/MovieDetails";

const Header = () =>{


    const setInitialURL =()=>
    {
        window.location = '/'
    }

    return(
        <div className={css.header}>
            <img className={css.icon} src={icon} alt={'site icon'} onClick={setInitialURL}/>
            <Routes>
                <Route path={'/'} element={<SearchForm/>}/>
            </Routes>
        </div>
    )
}

export {Header}