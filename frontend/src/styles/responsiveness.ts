// /home/rpz/code/blog-pessoal/frontend/src/styles/responsiveness.ts
import stylesLoginPageDesktop from "@/styles/loginPage/loginPageDesktop.module.css";
import stylesLoginPageMobile from "@/styles/loginPage/loginPageMobile.module.css";

import stylesRegisterPageDesktop from "@/styles/registerPage/registerPageDesktop.module.css";
import stylesRegisterPageMobile from "@/styles/registerPage/registerPageMobile.module.css";


// Função para percorrer um objeto e retornar um novo objeto com os valores CSS
const extractCSSFromObject = (obj: any) => {
  const cssObj: { [key: string]: string } = {};
  for (const key in obj) {
    cssObj[key] = obj[key];
  }
  return cssObj;
};

// Extrair estilos CSS dos objetos stylesMobile e stylesDesktop
const cssStylesLoginPageDesktop= extractCSSFromObject(stylesLoginPageDesktop);
const cssStylesLoginPageMobile = extractCSSFromObject(stylesLoginPageMobile);

// Objeto que armazenará os estilos responsivos
const responsiveStyleOfLoginPage: { [key: string]: string } = {};

// Iterar sobre as chaves do objeto stylesMobile e adicionar ao objeto responsivo
for (const key in cssStylesLoginPageMobile) {
  responsiveStyleOfLoginPage[key] = 
  `${cssStylesLoginPageMobile[key]} ${cssStylesLoginPageDesktop[key]}`;
}


const cssStylesRegisterPageDesktop = extractCSSFromObject(stylesRegisterPageDesktop);
const cssStylesRegisterPageMobile = extractCSSFromObject(stylesRegisterPageMobile);

// Objeto que armazenará os estilos responsivos
const responsiveStyleOfRegisterPage: { [key: string]: string } = {};

// Iterar sobre as chaves do objeto stylesMobile e adicionar ao objeto responsivo
for (const key in cssStylesRegisterPageMobile) {
  responsiveStyleOfRegisterPage[key] = 
  `${cssStylesRegisterPageMobile[key]} ${cssStylesRegisterPageDesktop[key]}`;
}

//console.log(responsiveStyleOfLoginPage);

export { responsiveStyleOfLoginPage, responsiveStyleOfRegisterPage };
