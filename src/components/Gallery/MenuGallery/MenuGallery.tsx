import React from 'react';
import '@/components/Header/Menu/Menu.sass';
import { Link } from 'react-router-dom';



const MenuGallery:React.FC = () =>{
    
    return(
        <div className='menuContent'>
            
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/gallery">Galería</Link></li>
                <li><a href="https://wa.me/56972589359" target="_blank">Contacto</a></li>
                
            </ul>
        </div>
);
}
export { MenuGallery };