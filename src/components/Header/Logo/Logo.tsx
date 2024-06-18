import React from "react";
import './Logo.sass';
import LogoImg from '../../../assets/Icons/logo.png';

const Logo: React.FC = () =>{
    return(
        <div className="contentLogo" >
            
			<a href="#logo"><img src={LogoImg.src} alt="Logo impresion kp3d" /></a>
    
        </div>
    );

}

export { Logo };