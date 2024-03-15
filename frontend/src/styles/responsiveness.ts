// /home/rpz/code/blog-pessoal/frontend/src/styles/responsiveness.ts
import stylesDesktop from "@/styles/loginPageDesktop.module.css";
import stylesMobile from "@/styles/loginPageMobile.module.css";

// Função para percorrer um objeto e retornar um novo objeto com os valores CSS
const extractCSSFromObject = (obj: any) => {
  const cssObj: { [key: string]: string } = {};
  for (const key in obj) {
    cssObj[key] = obj[key];
  }
  return cssObj;
};

// Extrair estilos CSS dos objetos stylesMobile e stylesDesktop
const cssStylesMobile = extractCSSFromObject(stylesMobile);
const cssStylesDesktop = extractCSSFromObject(stylesDesktop);

// Objeto que armazenará os estilos responsivos
const responsiveStyleOfLoginPage: { [key: string]: string } = {};

// Iterar sobre as chaves do objeto stylesMobile e adicionar ao objeto responsivo
for (const key in cssStylesMobile) {
  responsiveStyleOfLoginPage[key] = `${cssStylesMobile[key]} ${
    cssStylesDesktop[key]
  }`;
}

console.log(responsiveStyleOfLoginPage);

export { responsiveStyleOfLoginPage };
