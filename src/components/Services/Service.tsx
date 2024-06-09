import React from "react";
import './Service.sass';
import corporateImg from '../../assets/Images/corporate2.png';
import giftImg from '../../assets/Images/gift2.png';


const Service: React.FC = () => {

    return(
        <div className="service-content">
          
            <h1>Servicios</h1>
            <div className="sections-container">
            <section className="left">
              <img src={corporateImg.src} alt="articulos corporativos 3d" />
              <h2>Cotizaciones Coorporativas</h2>
              <p>Cotiza llaveros , trofeos</p>

            </section>
          
            <section className="right">
              <img src={giftImg.src} alt="regalos personalizados 3d" />
              <h2>Impresiones para regalar</h2>
              <p>Regala maceteros, figuritas</p>

            </section>
            </div>
          </div>
      

    );

}

export { Service };