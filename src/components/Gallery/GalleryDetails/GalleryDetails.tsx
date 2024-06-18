import React from 'react';
import { Logo } from '@/components/Header/Logo/Logo';
import { Menu } from '@/components/Header/Menu/Menu';
import '@/components/Header/header.sass';
import '../GalleryDetails.sass';

const GalleryDetails: React.FC = () => {

  return(
    <>
    <div className="header">
    <Logo/>
    <Menu/>
    </div>
    </>

  );

}

export { GalleryDetails } 