import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    --list-bg:#E3E4E6;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *::selection{
    background: palegreen;
    
  }
  body {
    font-size: 16px;
    height: 100vh;
    font-family: Roboto, sans-serif;
    background: radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,152,155,1) 0.1%, rgba(0,94,120,1) 94.2% ) no-repeat no-repeat;
  }
`
export default GlobalStyles