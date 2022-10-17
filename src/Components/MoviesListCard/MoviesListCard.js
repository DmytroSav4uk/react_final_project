import {useDispatch} from "react-redux";

const MoviesListCard = ({movie}) => {
    const {id, title,backdrop_path} = movie;

    const dispatch = useDispatch();



    return (


        <div>

            <p>{id}:{title}</p>
            <img  alt={backdrop_path}></img>

        </div>
    )
}

export {MoviesListCard};



