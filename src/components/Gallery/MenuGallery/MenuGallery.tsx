import React, { useState } from 'react';
import '@/components/Header/Menu/Menu.sass';
import { Link } from 'react-router-dom';



const MenuGallery:React.FC = () =>{

    const [menuOpen, setMenuOpen] =useState(false)
    
    return(
        <div className='menuContent'>
            <div className='menuResponsive' onClick={() => {
                    setMenuOpen(!menuOpen);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            
            <ul className={menuOpen ? "open" : ""}>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/gallery">Galería</Link></li>
                <li><a href="https://wa.me/56972589359" target="_blank">Contacto</a></li>
                
            </ul>
        </div>
);
}
export { MenuGallery };