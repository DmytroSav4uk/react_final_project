import {SearchForm} from "./Search form/SearchForm";
import css from "./header.module.css"


const Header = () =>{





    return(
        <div className={css.header}>
            <SearchForm></SearchForm>
        </div>



    )


}

export {Header}