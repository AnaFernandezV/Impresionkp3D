"use client";
import React , { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import '@/components/Header/header.sass';

import { Menu } from '@/components/Header/Menu/Menu';
import { Content } from '@/components/Content/Content';
import { Service } from '@/components/Service/Service';
import { Logo } from '@/components/Header/Logo/Logo';
import { Gallery } from '@/components/Gallery/Gallery';
import { Footer } from '@/components/Footer/Footer';


export default function Home() {
  const parallax = useRef<IParallax>(null!)

  const handleScrollTo = (page:number) =>{
    parallax.current.scrollTo(page);

  };
  return (
      <>
      
      <Parallax ref={parallax} pages ={4}> 

      <ParallaxLayer offset={0} >
        <div className='header'>
          <Logo/>   
            <Menu onScrollTo={handleScrollTo} />
          </div>
      </ParallaxLayer>       

          <ParallaxLayer offset={0.1} speed={2} > 
            <Content />
        
          </ParallaxLayer>
        
          <ParallaxLayer  offset={1} speed={1.2} onClick={() => parallax.current.scrollTo(2)}>
            
              < Service/>           

          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={1}>
            <Gallery />
            
          </ParallaxLayer>

          <ParallaxLayer offset={3} >
            <Footer/>
          </ParallaxLayer>
      
      </Parallax>
      
        
    </>
  );
}