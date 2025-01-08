import {createGlobalStyle} from 'styled-components';
const GlobalStyles = createGlobalStyle` 

*{
   margin:0;
   padding:0;
   box-sizing:border-box;

}

body {
font-family : 'Montserrat',sans-serif;
background-color: ${({theme}) => theme.colors.backgrounds.background1};
color: ${({theme})=> theme.colors.text};
// cursor:none
}


a {

text-decoration:none;
color:inherit;
}



// /* Custom cursor styles */
// .cursor {
//   position: absolute;
//   width: 20px;
//   height: 20px;
//   background-color: violet; /* Neon color */
//   border-radius: 50%;
//   pointer-events: none;
//   transition: transform 0.1s ease-in-out;
//   box-shadow: 0 0 15px violet, 0 0 30px violet; /* Glowing effect */
//   z-index: 9999;
// }

// /* Trail effect */
// .cursor-trail {
//   position: absolute;
//   width: 12px;
//   height: 12px;
//   background-color: violet; /* Neon color */
//   border-radius: 50%;
//   opacity: 0.6;
//   pointer-events: none;
//   transition: opacity 0.3s ease-out;
//   z-index: 9999;
// }




`;

export default GlobalStyles;