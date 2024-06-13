import React from "react";
import './Content.sass';
import '../ButtonCotizar/Button.sass';
import { ButtonCotizar } from "../ButtonCotizar/Button";
import { motion } from "framer-motion";


const Content: React.FC = () =>{
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: [0.42, 0, 0.58, 1], 
        duration: 1, 
        staggerChildren: 0.2 
      }
    }
  }
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }
    return(
        <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className='index' >
        
        <motion.h1 variants={item}>¡Da vida a tus ideas con nuestras impresiones <span style={{color:'#52ffc5',}}>3D</span>!</motion.h1>
        <motion.h2 variants={item}>Descubre una nueva dimensión en creatividad.<hr></hr>Cotiza tus proyectos hoy mismo.</motion.h2>
        
          <ButtonCotizar/>
        </motion.div>
    );
}
export { Content };