import React from "react";
import './Content.sass';


const Content: React.FC = () =>{

    return(
        <div className='index' >
        <h1>¡Da vida a tus ideas con nuestras impresiones <span style={{color:'#D90429',}}>3D</span>!</h1>
        <h2>Descubre una nueva dimensión en creatividad.<hr></hr>Cotiza tus proyectos hoy mismo.</h2>
        <button className='custom-button'>Hover me !</button>
        
        </div>


);
}
export { Content };