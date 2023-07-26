import '../styles/menu.css'
import logo from '../images/logogato.png'
import Content from '../pages/content';
import Clases from '../pages/clases';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';


const Menu = () => {

    
    return(
  
            <div className="menu">
                <Link to="/" className="logo">
                <img className='logoGato' src={logo} alt="" />
                </Link>
                <div className="menu-items">
                    <Link to="/" className="menu-items__item">Home</Link>
                    <Link to="content" className="menu-items__item">Contenido</Link>
                    <Link to="clases" className="menu-items__item">Clases</Link>
                    <a className="menu-items__item">Sobre mi</a> 
                </div>
            </div>

    );
};
export default Menu;