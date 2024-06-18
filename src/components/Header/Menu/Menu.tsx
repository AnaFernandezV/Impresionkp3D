import React from 'react';
import '../Menu/Menu.sass';
import { Link } from 'react-router-dom';

interface MenuProps{
    onScrollTo: (page: number) => void;
}

const Menu:React.FC<MenuProps> = ({onScrollTo}) =>{
    
    return(
        <div className='menuContent'>
            
            <ul>
                <li><a href='#'>Inicio</a></li>
                <li><a onClick={() => onScrollTo(1)} >Servicios</a></li>
                <li> <a onClick={() => onScrollTo(2)}>Nuestros Trabajos</a></li>
                <li><Link to="/gallery">Galería</Link></li>
                <li><a href="https://wa.me/56972589359" target="_blank">Contacto</a></li>
                
            </ul>
        </div>
);
}
export { Menu };