import React from 'react'
import Typing from './Typing'
import { Canvas} from '@react-three/fiber'
import HackerRoom from '../three_components/HackerRoom'
import { PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import ComputerDesk from '../three_components/ComputerDesk'
import CanvasLoader from '../Layout/CanvasLoader'
import { Leva, useControls } from 'leva';
import {useMediaQuery} from 'react-responsive';
import Target from '../three_components/Target'
import CuteRobot from '../three_components/CuteRobot'
import HexSphere from '../three_components/HexSphere'
import ReactLogo from '../three_components/ReactLogo'
import Web from '../three_components/Web'
import HeroCamera from '../three_components/HeroCamera'
import Button from '../common/Button'

const Hero = () => {
  
  const isMobile = useMediaQuery({maxWidth: 768});
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
  const isSmall = useMediaQuery({maxWidth: 440}
    );

    

  const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.07,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.4, -6.0, 0],
      cubePosition: isSmall ? [-4, -5, 0] : isMobile ? [-5, -5, 0] : isTablet ? [-5, -5, 0] : [-12, -5.5, 0],
      webPosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [12, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [16, 4, 0] : [11, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-12, 2, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  const sizes = calculateSizes(isMobile, isTablet, isSmall);
 
  return (
    <div>
        <section className="min-h-screen w-full flex flex-col relative">
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
              <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>I'm Rediet Ferew <span className='waving-hand'>👋</span><Typing/></p>
                
                 <div className='w-full h-full absolute inset-0'>
                
                  <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader/>}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]} />

                    <HeroCamera isMobile={isMobile}>
                    <HackerRoom 
                    
                    position={sizes.deskPosition}
                    rotation={[0, -Math.PI, 0]}
                    scale={sizes.deskScale}
                    
                    />
                    </HeroCamera>
                    

                    <group>

                      <CuteRobot position={sizes.reactLogoPosition}/>  
                      
                      <HexSphere position={sizes.cubePosition}/>  
                      <ReactLogo position ={sizes.ringPosition}/>
                      <Web position={sizes.webPosition}/>
                    </group>

                    <ambientLight intensity={1}/>
                    <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                    </Suspense>
                  </Canvas>
                </div>

                <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                  <a href='#contact' className='w-fit'>
                    <Button name="Let's work together" isBean containerClass ="sm:w-fit w-full sm:min-w-96"/>
                  </a>
                </div>
            </div>
            
        </section> 
    </div>
  )
}


export default Hero