import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  background-color: #151717;
  display: flex;
  justify-content: center;
  padding-top: 100px;

  @media (max-width: 768px) {
    margin-top: 80px;
  }

  @media (min-width: 768px) {
    height: 100vh;
  }
`

export const Main = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h1 {
    color: #d9e3ea;
    font-size: 3rem;
    font-weight: bold;
  }

  p {
    color: #9ba984;
    font-size: 1.8rem;
    margin-bottom: 40px;
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