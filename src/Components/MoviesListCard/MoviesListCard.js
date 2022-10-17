import {useDispatch} from "react-redux";



const MoviesListCard = ({movie}) => {
    const {id, title,backdrop_path} = movie;

    const dispatch = useDispatch();

    return (
        <div>
            <p>{id}:{title}</p>
            <img src={"https://image.tmdb.org/t/p/w500/"+backdrop_path}  alt={backdrop_path}></img>

        </div>
    )
}

export {MoviesListCard};



