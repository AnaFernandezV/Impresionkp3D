import React from "react";
import './Footer.sass';
import { Logo } from '@/components/Header/Logo/Logo';
import whatsappIcon from '../../assets/Icons/whattsapp-icon.png';
import instagramIcon from '../../assets/Icons/instagram-icon.png';


const Footer: React.FC = () => {
    return(
        <div className="backFooter" >
          <div className="logo">
					<Logo/> 
					</div>
					<div className="socialMedia">
						
						<img src={whatsappIcon.src} alt="whattsapp" />

						<img src={instagramIcon.src} alt="instagram.com" />

					</div>
					<div className="contact">

					</div>
        </div>

    );
}

export { Footer };