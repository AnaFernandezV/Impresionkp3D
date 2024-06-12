"use client";
import React , { useRef } from 'react';
import '@/components/Header/header.sass';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { Menu } from '@/components/Header/Menu/Menu';
import { Content } from '@/components/Content/Content';
import { Service } from '@/components/Services/Service';
import { Logo } from '@/components/Header/Logo/Logo';
import { Gallery } from '@/components/Gallery/Gallery';
import { Footer } from '@/components/Footer/Footer';


export default function Home() {
  const parallax = useRef<IParallax>(null!)

  return (
      <>
      <Parallax ref={parallax} pages ={3}> 

      <ParallaxLayer offset={0} >
        <div className='header'>
          <Logo/>   
          <Menu/>
        </div>
      </ParallaxLayer>  

          <ParallaxLayer 
          offset={0.1}
          speed={1}> 

          <ParallaxLayer speed={2} onClick={() => parallax.current.scrollTo(1)} > 
            <Content />
          </ParallaxLayer>
        
      </ParallaxLayer>
        
          <ParallaxLayer style={{marginTop:'0%',backgroundColor:"#FFF",}} offset={1} speed={1.2} onClick={() => parallax.current.scrollTo(1.6)}>
            <Service/>

          </ParallaxLayer>

          <ParallaxLayer offset={1.6} onClick={() => parallax.current.scrollTo(0)} >
            <Gallery />
      
          </ParallaxLayer>

          <ParallaxLayer offset={2} >
            <Footer/>
          </ParallaxLayer>
        
        </Parallax>
        
    </>
  );
}