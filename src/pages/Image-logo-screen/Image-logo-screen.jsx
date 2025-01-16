import React from 'react';
import logo from "../../assets/jobbytime_com_logo_png_150x150.png"

const ImageLogoScreen = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <img 
        src={logo} 
        alt="JobbyTime Logo" 
        style={{ maxWidth: '100%', height: 'auto' }} 
      />
    </div>
  );
};

export default ImageLogoScreen;