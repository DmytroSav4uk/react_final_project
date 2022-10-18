import {useDispatch} from "react-redux";


const MoviesListCard = ({movie}) => {
    const {id, title, backdrop_path,poster_path} = movie;

    const dispatch = useDispatch();

    return (
        <div>
            <h1>{title}</h1>
            <img src={"https://image.tmdb.org/t/p/w500/" + poster_path} alt={title +"img"}></img>

        </div>
    )
}

export {MoviesListCard};



