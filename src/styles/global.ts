import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --swiper-theme-color: ${(props) => props.theme.colors.secondary};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: ${(props) => props.theme.fonts.size.small};
  }

  a {
    text-decoration: inherit;
  }

  h1, h2, h3, h4, h5, h6, p, span, button {
    color: ${(props) => props.theme.colors.white};
  }

  section .container {
    width: 85%;
    max-width: 1440px;
  }
`
