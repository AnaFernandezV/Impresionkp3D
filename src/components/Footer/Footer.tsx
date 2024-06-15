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
						<a href="https://wa.me/56972589359" target="_blank">
						<img src={whatsappIcon.src} alt="whatsapp" />
						</a>
					</div>
					<div className="socialMediaI">
						<h3>Síguenos en instagram</h3>
						<a href="https://www.instagram.com/impresionkp3d?igsh=MW5ja25najZsdHF3cg==" target="_blank">
						<img src={instagramIcon.src} alt="instagram.com"/>
						</a>
					</div>
					<div className="contact">
						<ContactButton/>
					</div>
        </div>

    );
}

export { Footer };