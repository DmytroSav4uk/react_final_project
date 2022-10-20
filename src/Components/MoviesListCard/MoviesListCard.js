import css from "./card.module.css"

import StarRatings from "react-star-ratings/build/star-ratings";
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux/slices/Movie.slice";
import {Link} from "react-router-dom";





const MoviesListCard = ({movie}) => {
    const {id, title, backdrop_path,poster_path,vote_average} = movie;

const dispatch = useDispatch();

    return (
        <div className={css.card}  onClick={()=>{window.location ='/movie/details?id='+id}  }>
            <h2>{title}</h2>
            <img src={"https://image.tmdb.org/t/p/w500/" + poster_path} alt={title +"img"}></img>
            <p>average rate:{vote_average}</p>
            <StarRatings
                rating={vote_average}
                starRatedColor="yellow"
                numberOfStars={10}
                name='rating'
                starDimension="20px"
                starSpacing="2px"
                svgIconViewBox={css.stars}
            />

            <div></div>

        </div>
    )
}

export {MoviesListCard};



