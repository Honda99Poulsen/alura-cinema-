import styles from './Favoritos.module.css'
import Banner from "components/Banner"
import Card from "components/Card"
import Titulo from "components/Titulo"
import { useFavoritosContext } from 'context/Favoritos'

function Favoritos(){

    const {favorito} = useFavoritosContext()

    return(
        <div className={styles.div}>
        <Banner img="favoritos"/>
        <Titulo className={styles.titulo}>
            <h1>Mis Favorito</h1>
        </Titulo>
        <section className={styles.container}>
            {
                favorito.map( fav => {
                    return <Card {...fav} key={fav.id} />
                } )
            }
       </section>
        </div>
    )
}

export default Favoritos