import React from "react";
import './Logo.sass';
import LogoImg from '../../../assets/Icons/logo.png';
import { Link } from 'react-router-dom';

const Logo: React.FC = () =>{
    return(
        <div className="contentLogo" >
            
			<Link to="/"><img src={LogoImg.src} alt="Logo impresion kp3d" /></Link>
    
        </div>
    );

}

export { Logo };