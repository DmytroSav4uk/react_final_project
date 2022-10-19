import css from "./card.module.css"

const MovieListSearchCard = ({searchMovie}) =>{

    const {name, id} = searchMovie;

return(
    <div className={css.foundCard}>

        <h2>{name}</h2>
    </div>
)
}

export {MovieListSearchCard};