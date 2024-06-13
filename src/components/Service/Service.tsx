import React, { useEffect } from "react";
import './Service.sass';
import corporateImg from '../../assets/Images/corporate2.png';
import giftImg from '../../assets/Images/gift2.png';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Service: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15, 
  });
  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

    return(
        <div className="service-content">
          
            <motion.h1
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
            }}
            
            >Servicios</motion.h1>

            <motion.div className="sections-container"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}>

            <section className="left" >
              <img src={corporateImg.src} alt="articulos corporativos 3d" />
              <h2>Cotizaciones Coorporativas</h2>
              <p>Cotiza llaveros , trofeos</p>

            </section>
          
            <section className="right" >
              <img src={giftImg.src} alt="regalos personalizados 3d" />
              <h2>Impresiones para regalar</h2>
              <p>Regala maceteros, figuritas</p>

            </section>
            </motion.div>
          </div>
      

    );

}

export { Service };