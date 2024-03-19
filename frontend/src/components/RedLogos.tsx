// /home/rpz/code/blog-pessoal/frontend/src/components/RedLogos.tsx

import React from 'react';
import { responsiveStyleOfLoginPage } from '@/styles/responsiveness';

const responsiveStyles = responsiveStyleOfLoginPage;

const RedLogos = () => {

  return (
    <>
      <svg className={responsiveStyles.redLogo_2} width="75" height="71" viewBox="0 0 75 71" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M64.749 35.3669C64.749 48.8635 53.0204 60.7337 37.3745 60.7337C21.7286 60.7337 10 48.8635 10 35.3669C10 21.8702 21.7286 10 37.3745 10C53.0204 10 64.749 21.8702 64.749 35.3669Z" fill="#DD424C" stroke="white" strokeWidth="20"/>
      </svg>
      <svg className={responsiveStyles.redLogo} width="83" height="79" viewBox="0 0 83 79" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_5_57)">
          <ellipse cx="41.6256" cy="35.3669" rx="37.3745" ry="35.3669" fill="#DD424C"/>
          <path d="M74.0001 35.3669C74.0001 51.8815 59.7693 65.7337 41.6256 65.7337C23.482 65.7337 9.2511 51.8815 9.2511 35.3669C9.2511 18.8522 23.482 5 41.6256 5C59.7693 5 74.0001 18.8522 74.0001 35.3669Z" stroke="white" strokeWidth="10"/>
          </g>
          <defs>
          <filter id="filter0_d_5_57" x="0.251099" y="0" width="82.749" height="78.7337" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_57"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_57" result="shape"/>
          </filter>
          </defs>
      </svg>
    </>
  );
};

export default RedLogos;
