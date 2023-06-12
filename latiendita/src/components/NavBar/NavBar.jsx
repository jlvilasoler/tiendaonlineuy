import "/src/components/NavBar/NavBar.scss"
import CardWidget from "../CardWidget/CardWidget"

const Header = () => {

    return (
        <header className="header">
            <div className="header_container">
                <h1 className="header_logo">tiendaonline.uy</h1>

                <nav className="header_nav">
                    <a className="header_link" href="#">INICIO</a>
                    <a className="header_link" href="#">CATEGORIAS</a>
                    <a className="header_link" href="#">CONTACTO</a>
                    <a className="header_link" href="#">👤</a>
                    <CardWidget/>
                </nav>
            </div>
        </header>
    )

}

export default Header