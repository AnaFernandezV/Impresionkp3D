"use client";
import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import backgroundCube from '../assets/Images/cube-background.png';
import bigCube from '../assets/Images/big-cube.png';
import { Menu } from '../components/Header/Menu/Menu';
import { Content } from '../components/Content/Content';


export default function Home() {
  return (
    <div >
      <Parallax pages ={3}> 
      <Menu/>   
        <ParallaxLayer 
        offset={0.1}
        speed={1}
        style={{
          backgroundImage:`url(${backgroundCube.src})`,
          backgroundSize:'cover',
          top:0,
          zIndex:'-1',
          marginTop:'-75px',
        }}> 
      
        </ParallaxLayer>

        <ParallaxLayer 
          offset={0.1}
          speed={1}> 
          <ParallaxLayer speed={2}> <Content /></ParallaxLayer>
          
       
          <img src={bigCube.src} style={{ display: 'block', width: '100%', marginLeft: '0%' ,marginTop:'0%',zIndex:'-1',position:'relative',}} />

      </ParallaxLayer>

      
          <ParallaxLayer style={{marginTop:'10%'}} offset={0.9999} speed={1.2}>
        {/*   <img src={cubo3} style={{ display: 'block', width: '100%', marginLeft: '0%' ,marginTop:'-50%',zIndex:'-1',position:'relative',}} /> */}
          </ParallaxLayer>
          <ParallaxLayer></ParallaxLayer>
        
        

      </Parallax>
    </div>
  );
}
