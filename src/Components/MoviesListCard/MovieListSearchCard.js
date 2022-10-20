import css from "./card.module.css"

const MovieListSearchCard = ({searchMovie}) =>{

    const {name, id} = searchMovie;


return(
    <div className={css.foundCard}  onClick={()=>{window.location ='/movie/details?id='+id}}>
        <h2>{name}</h2>

    </div>
)
}

export {MovieListSearchCard};