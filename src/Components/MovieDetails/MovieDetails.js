import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {movieActions} from "../../redux/slices/Movie.slice";
import css from "./details.module.css"
import StarRatings from "react-star-ratings/build/star-ratings";

const MovieDetails = () => {

    const dispatch = useDispatch();

    let {oneMovie} = useSelector(state => state.movieReducer);
    const [params] = useSearchParams();
    const id = params.get('id');

    useEffect(() => {
        dispatch(movieActions.getOneMovie(id));
    }, [id])

    return (
        <div className={css.black}>
            <div className={css.backgroundImage}>
                <img className={css.backImg} src={'https://image.tmdb.org/t/p/w500/' + oneMovie.backdrop_path} alt={'background image'}></img>
                <div className={css.content}>
                    <div className={'top'}>
                        <img className={css.posterImg} src={'https://image.tmdb.org/t/p/w500/' + oneMovie.poster_path} alt={'poster image'}></img>

                        <div className={css.stars}>
                        <StarRatings
                            rating={oneMovie.vote_average}
                            starRatedColor="yellow"
                            numberOfStars={10}
                            name='rating'
                            starDimension="20px"
                            starSpacing="2px"
                        />
                        </div>
                        <h1>{oneMovie.title}</h1>
                    </div>
                    <div className={'mid'}>
                        <div className={css.text}>
                        <p>{oneMovie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export {MovieDetails}
