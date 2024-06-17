import React from 'react';
import '../Menu/Menu.sass';

const Menu:React.FC = () =>{

    return(
        <div className='menuContent'>
            
            <ul>
                <a href=""><li>Servicios</li></a>
                <a href=""><li>Nuestros Trabajos</li></a>
                <a href=""><li>Galería</li></a>
                <a href="https://wa.me/56972589359" target="_blank"><li>Contacto</li></a>
                
            </ul>
        </div>
);
}
export { Menu };