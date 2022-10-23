import {useForm} from "react-hook-form";

import {movieActions} from "../../../redux/slices/Movie.slice";
import {storeSetSearch} from "../../../redux/store";
import {useDispatch} from "react-redux";
import css from "../header.module.css";

const SearchForm = () => {
    const {register, handleSubmit, reset, formState: {isDirty, isValid}} = useForm({
        mode: 'onChange'
    });
    const dispatch = useDispatch();
    const submit = async (data) => {

        storeSetSearch(data.inputData);
        dispatch(movieActions.searchMovie(data.inputData));
        reset();
    }
    return (
        <form className={css.form}
              onSubmit={handleSubmit(submit)}>
            <input className={css.input} id="searchText" type="text"
                   placeholder={'search a movie'} {...register('inputData')}/>
            <button className={css.submitButton} type={'submit'} disabled={!isDirty || !isValid}>
                <img
                    src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/2048px-Magnifying_glass_icon.svg.png'}
                    alt={'lypa'}></img>
            </button>
        </form>)
}

export {SearchForm};
