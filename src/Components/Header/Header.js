import {SearchForm} from "./Search form/SearchForm";
import css from "./header.module.css"
import icon from "../Icon/icon.png"
import {Route, Routes} from "react-router-dom";

import {GenresList} from "./GenresList/GenresList";

const Header = () =>{


    const setInitialURL =()=>
    {
        window.location = '/'
    }

    return(
        <div className={css.header}>
            <div>
            <img className={css.icon} src={icon} alt={'site icon'} onClick={setInitialURL}/>
            </div>
            <div className={css.flex}>
            <Routes>
                <Route path={'/'} element={<><GenresList/><SearchForm/></> }/>
            </Routes>
            </div>
        </div>
    )
}

export {Header}