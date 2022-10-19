import css from "./card.module.css"

import StarRatings from "react-star-ratings/build/star-ratings";





const MoviesListCard = ({movie}) => {
    const {id, title, backdrop_path,poster_path,vote_average} = movie;



    return (
        <div className={css.card}>
            <h2>{title}</h2>
            <img src={"https://image.tmdb.org/t/p/w500/" + poster_path} alt={title +"img"}></img>
            <p>average rate:{vote_average}</p>
            <StarRatings
                rating={vote_average}
                starRatedColor="yellow"
                //changeRating={this.changeRating}
                numberOfStars={10}
                name='rating'
                starDimension="20px"
                starSpacing="2px"
            />

        </div>
    )
}

export {MoviesListCard};



