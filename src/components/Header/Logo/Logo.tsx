import React from "react";
import './Logo.sass';
import LogoImg from '../../../assets/Images/logo.png';

const Logo: React.FC = () =>{
    return(
        <div className="contentlogo">
					<img src={LogoImg.src} alt="Logo impresion kp 3d" />

        </div>

    );

}

export { Logo };