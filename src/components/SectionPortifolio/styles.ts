import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  padding-top: 60px;
  padding-bottom: 50px;
  background-color: #0b0d17;
  display: flex;
  justify-content: center;

  .comtainer {
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      width: 85%;
    }
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
  margin-bottom: 80px;

  h2 {
    color: #d9e3ea;
    font-size: ${(props) => props.theme.fonts.size.xxlarge};
  }

  p {
    color: #9ba9b4;
    font-size: ${(props) => props.theme.fonts.size.medium};
  }

  @media (max-width: 768px) {
    gap: 16px;
    margin-bottom: 50px;

    h2 {
      font-size: ${(props) => props.theme.fonts.size.xxlarge};
    }

    p {
      color: #9ba9b4;
      font-size: ${(props) => props.theme.fonts.size.medium};
    }
  }
`

export const Cards = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  justify-items: center;
  padding-bottom: 10px;

  .swiper {
    height: 515px !important;
  }

  &.desktop {
    display: flex;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &.mobile {
    display: none;

    @media (max-width: 768px) {
      display: flex;
    }
  }

  @media (max-width: 768px) {
    max-width: 400px;
    width: 95%;
  }
`

export const Card = styled.div`
  cursor: grab;
  width: 280px;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #25282c;
  gap: 10px;
  text-align: end;
  padding: 20px 40px 25px 40px;

  &:active {
    cursor: grabbing;
  }

  .video {
    width: 100%;
    height: 355px;
  }

  @media (max-width: 768px) {
    gap: 12px;
  }
`

export const Photo = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  p {
    font-size: ${(props) => props.theme.fonts.size.xsmall};
    padding-left: 10px;
  }

  @media (max-width: 768px) {
    img {
      max-width: 35px;
      min-width: 35px;
      width: 35px;
      height: 35px;
      min-height: 35px;
      max-height: 35px;
    }
  }
`

export const Border = styled.div`
  border: 1px solid #33363a;
  width: 100%;
  height: 0;
  margin-bottom: 6px;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`
