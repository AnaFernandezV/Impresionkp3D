"use client";
import React , { useRef } from 'react';
import '@/components/Header/header.sass';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import backgoundLineal from '@/assets/Images/background-lineal.png';
import bigCube from '@/assets/Images/big-cube.png';
import someCubes from '@/assets/Images/some-cubes.png';
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
      
        </ParallaxLayer>

        <ParallaxLayer 
          offset={0.1}
          speed={1}> 

          <ParallaxLayer speed={2} onClick={() => parallax.current.scrollTo(1)} > 
            <Content />
          </ParallaxLayer>
          
      
          {/* <img src={bigCube.src} style={{ display: 'block', width: '100%', marginLeft: '0%' ,marginTop:'0%',zIndex:'-1',position:'relative',}} />
 */}
      </ParallaxLayer>
      <ParallaxLayer offset={0.99} speed={0.9}
        >
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