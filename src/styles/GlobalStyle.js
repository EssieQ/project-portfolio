import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #262626;
  
    --deep-dark: #1E1E1E;
   
    --white : white;
    --black: black;
    --light: #FFEBC9;
    --light-2: #fff6e3;
    --brown: #753422;
    --terracotta: #B05B3B;
    --coffee: #D79771;
  }
  html{
    color: var(--terracotta);
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--light);
  }
  h1 {
    color: var(--terracotta);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--light-2);
    .scroll-content {
      background-color: var(--light-2);
    }
    .scrollbar-track.scrollbar-track-y {
      z-index: 101;
      background: var(--light-2);
      .scrollbar-thumb-y {
        background: var(--light-2);
      }
    }
  }
`;
export default GlobalStyles;
