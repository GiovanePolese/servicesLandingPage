import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  background-color: #0b0d17;
  padding-top: 95px;
  display: flex;
  justify-content: center;
  padding-bottom: 60px;

  .container {
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      width: 85%;
    }
  }

  @media (max-width: 768px) {
    padding-top: 100px;
  }
`

export const Main = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h1 {
    color: ${(props) => props.theme.colors.lightGrey};
    font-size: ${(props) => props.theme.fonts.size.xxlarge};
    font-weight: bold;
    text-align: center;
    max-width: 800px;
  }

  p {
    color: ${(props) => props.theme.colors.lightGreyDark};
    font-size: ${(props) => props.theme.fonts.size.medium};
    margin: 8px 0 30px 0;
    text-align: center;
    max-width: 1000px;
  }

  strong {
    color: ${(props) => props.theme.colors.secondary};
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 5px;

    h1 {
      font-size: 2rem;
      font-weight: 700;
    }

    p {
      font-size: 1.4rem;
      margin-bottom: 20px;
    }
  }
`

export const ImageHeader = styled.div`
  position: absolute;
  top: -95px;
  right: 0;
  z-index: 0;
`

export const ImageMain = styled.div`
  position: absolute;
  left: 0px;
  width: 550px;
  height: 450px;
  z-index: 1;
  top: 300px;

  @media (max-width: 768px) {
    width: 354x;
    height: 200px;
    left: -99px;
    top: 293px;
    transform: scale(0.6);
  }
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  iframe {
    margin-top: 32px;
    z-index: 2;
    width: 90%;
    height: auto;
    max-height: 900px;
    min-height: 450px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 50px;

    iframe {
      margin-top: 24px;
      z-index: 2;
      width: 100%;
      max-height: 300px;
      min-height: 200px;
    }
  }
`
