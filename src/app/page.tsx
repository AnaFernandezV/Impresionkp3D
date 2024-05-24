"use client";
import React from 'react';
import { Menu } from '../components/Header/Menu/Menu';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';

export default function Home() {
  return (
    <div >
    <Parallax pages ={3}> 
    <Menu/>   
      <ParallaxLayer 
      offset={0.1}
      speed={1}> 

      </ParallaxLayer>

      <ParallaxLayer offset={0.99} speed={0.9}>
        
      </ParallaxLayer>
    
        <ParallaxLayer style={{marginTop:'10%'}} offset={0.9999} speed={1.2}>
          
        </ParallaxLayer>
        <ParallaxLayer></ParallaxLayer>
      
      

    </Parallax>
    </div>
  );
}
