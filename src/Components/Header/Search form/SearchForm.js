import {useForm} from "react-hook-form";

const SearchForm = () => {


    const {register, handleSubmit, reset, formState: {isDirty,isValid}} = useForm({
        mode: 'onChange'
    });


    const submit =(data)=> {

      console.log(data)
        reset()
    }


    return (


        <form
            onSubmit={handleSubmit(submit)}>

                <input type="text" placeholder={'search a movie'} {...register('title')}/>
                <button type={'submit'} disabled={!isDirty || !isValid} onClick={()=>{window.location='/search/movies'}}>submit</button>

                </form>)}

              export {SearchForm};