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

  .swiper {
    height: 420px !important;
  }

  .swiper-pagination {
    bottom: env(safe-area-inset-bottom) !important;
    z-index: 99999;
    transform: scale(1.3);
  }

  .swiper-pagination-bullet-active {
    width: 25px;
    border-radius: 10px;
  }

  .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {
    background-color: ${(props) => props.theme.colors.white} !important;
  }

  @media (max-width: 768px) {
    .swiper {
      height: 310px !important;
    }

    .swiper-pagination-bullet-active {
      width: 20px;
    }
  }
`
