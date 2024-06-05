import React from "react";
import './Footer.sass';
import { Logo } from '@/components/Header/Logo/Logo';
import whatsappIcon from '../../assets/Icons/whatsapp-icon.png';
import instagramIcon from '../../assets/Icons/instagram-icon.png';
import { ContactButton } from '@/components/Footer/ContactButton/ContactButton';

const Footer: React.FC = () => {
    return(
        <div className="backFooter" >
          <div className="logo">
						<h3>Impresión KP3D</h3>
					<Logo/> 
					</div>
					<div className="socialMediaW">
						<h3>Cotiza en nuestro Whatsapp</h3>
						<img src={whatsappIcon.src} alt="whatsapp" />
					</div>
					<div className="socialMediaI">
						<h3>Síguenos en instagram</h3>
						<img src={instagramIcon.src} alt="instagram.com"/>

					</div>
					<div className="contact">
						<ContactButton/>
					</div>
        </div>

    );
}

export { Footer };