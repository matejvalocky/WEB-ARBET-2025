// KOMPONENTA Navigácie:
// components/Navigation.jsx
import { Link } from 'react-router-dom'


// importovanie css štýlov
import "./Navigation.css"


// import obrázkov
import logo from "../assets/nav-logo.avif"

const Navigation = () => {
    return (
        <nav className='navbar'>
            <div className="nav-wrapper">
                <img src={logo} alt="" />
                <ul>
                    <li><Link to="/">Domov</Link></li>
                    <li><Link to="/buildings">Stavby</Link></li>
                    <li><Link to="/projects">Projekty</Link></li>
                    <li><Link to="/about">O nás</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                </ul>
            </div>




        </nav>
    )
}

export default Navigation



