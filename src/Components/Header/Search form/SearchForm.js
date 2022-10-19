import {useForm} from "react-hook-form";


const SearchForm = () => {


    const {register, handleSubmit, reset, formState: {isDirty, isValid}} = useForm({
        mode: 'onChange'
    });


    const submit = async (data) => {
        console.log(data);
        reset()
    }


    return (


        <form
            onSubmit={handleSubmit(submit)}>
            <input id="searchText" type="text" placeholder={'search a movie'} {...register('inputData')}/>
            <button type={'submit'} disabled={!isDirty || !isValid}>submit</button>
        </form>)
}

export {SearchForm};