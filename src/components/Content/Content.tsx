import React from "react";
import './Content.sass';
import '../ButtonCotizar/Button';
import { ButtonCotizar } from "../ButtonCotizar/Button";


const Content: React.FC = () =>{

    return(
        <div className='index' >
        <h1>¡Da vida a tus ideas con nuestras impresiones <span style={{color:'#52ffc5',}}>3D</span>!</h1>
        <h2>Descubre una nueva dimensión en creatividad.<hr></hr>Cotiza tus proyectos hoy mismo.</h2>
        
            <ButtonCotizar/>
        </div>
    );
}
export { Content };