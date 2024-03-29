import { createGlobalStyle } from 'styled-components'
 
export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #222831;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 20px
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .k-rating-container .k-rating-item {
      width: 20px;
    }
  }

`;