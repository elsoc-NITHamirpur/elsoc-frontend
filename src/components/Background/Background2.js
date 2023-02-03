import React, { useState, useEffect, useRef } from "react";
import DOTS from "vanta/dist/vanta.dots.min";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const Background2 = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        DOTS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x6e20ff,
          backgroundColor: 0x4010f,
          size: 3,
          spacing: 40.0,
          showLines: false,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <div ref={myRef} className='h-screen fixed -z-10 w-full'>
  </div>;
};

export default Background2;
