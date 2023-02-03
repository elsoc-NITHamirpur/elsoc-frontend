import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";


const Background = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

  return (
    <div className='w-full h-screen fixed -z-10'>
    <Particles
    id="tsparticles"
    
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      background:{
        image: "url('https://img.freepik.com/premium-vector/vector-circle-tech-with-light-blue-lamp-bulb-technology-background_43778-444.jpg?w=826')",
        repeat:"no-repeat",
        size:"cover"
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 0,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 50,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }}
  />
  </div>
  )
}

export default Background