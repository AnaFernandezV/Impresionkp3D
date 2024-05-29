import React from "react";
import './Service.sass';
import corporateImg from '../../assets/Icons/corporate3d.png';
import giftImg from '../../assets/Icons/gift3d.png';

const Service: React.FC = () => {

    return(
        <div className="service-content">
          
            <h1>Servicios</h1>
            <div className="sections-container">
            <section>
              <img src={corporateImg.src} alt="articulos corporativos 3d" />
              <h2>Cotizaciones Coorporativas</h2>
              <p>Cotiza llaveros , trofeos</p>

            </section>
          
            <section>
              <img src={giftImg.src} alt="regalos personalizados 3d" />
              <h2>Impresiones para regalar</h2>
              <p>Regala maceteros, figuritas</p>

            </section>
            </div>
          </div>
      

    );

}

export { Service };