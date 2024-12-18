// KOMPONENTA Navigácie:
// components/Navigation.jsx
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';


// importovanie css štýlov
import "./Navigation.css"



// import obrázkov
import logo from "../assets/nav-logo.avif"

const Navigation = () => {
    return (
        <nav className='navbar box-shadow'>
            <div className="nav-wrapper">
                <img src={logo} alt="" />
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active">Domov</NavLink>
                    </li>
                    <li>
                        <NavLink to="/buildings" activeClassName="active">Stavby</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" activeClassName="active">Projekty</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">O nás</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active">Kontakt</NavLink>
                    </li>
                </ul>
            </div>




        </nav>
    )
}

export default Navigation



