import Cabecera from "components/Cabecera/Cabecera"
import Container from "components/Container"
import Footer from "components/Footer/Footer"
import FavoritosProvider from "context/Favoritos"
import { Outlet } from "react-router-dom"

function PaginaBase(){
    return(
        <main>
            <Cabecera />
            <FavoritosProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritosProvider>
            <Footer/>
        </main>
    )
}

export default PaginaBase