import css from "./card.module.css"

import StarRatings from "react-star-ratings/build/star-ratings";
import {useSelector} from "react-redux";


const MoviesListCard = ({movie}) => {
    const {id, title, poster_path, vote_average, genre_ids} = movie;
    const {genres} = useSelector(state => state.genresReducer)

    function getGenreName(ids) {
        let gName = '';
        for (const genre of genres.genres) {
            if (ids.includes(genre.id)) {
                if (gName.length > 0) {
                    gName += ', '
                }
                gName = gName + genre.name
            }
        }
        return gName
    }

    return (
        <div className={css.card} onClick={() => {
            window.location = '/movie/details/'
                + '?id=' + id
        }}>
            <img src={"https://image.tmdb.org/t/p/w500/" + poster_path} alt={title + "img"}></img>
            <h2>{title}</h2>
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
              <span className={css.badge}>{getGenreName(genre_ids)} </span>
        </div>
    )
}

export {MoviesListCard};



