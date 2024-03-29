import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  padding-top: 60px;
  background-color: #151717;
  display: flex;
  justify-content: center;

  .comtainer {
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      width: 85%;
    }
  }

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const Assessments = styled.p`
  color: #36a269;
  font-size: 1.4rem;
  font-weight: 500;
  background-color: #c6f6d5;
  padding: 5px 25px;
  border-radius: 15px;
  box-shadow: 0px 1px 3px;
  margin-bottom: 20px;
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
  width: 350px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #25282c;
  gap: 16px;
  text-align: end;
  padding: 28px 40px;

  &:active {
    cursor: grabbing;
  }

  .video {
    width: 100%;
    height: 180px;
  }

  @media (max-width: 768px) {
    max-height: 300px;
    height: 280px;
    width: 220px;
    max-width: 400px;
    padding: 20px 22px;
    gap: 12px;
  }
`

export const Photo = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  &:after {
    content: ' ';
    width: 22px;
    height: 19px;
    background: url('/images/aspas.svg') no-repeat;
    position: absolute;
    top: 24px;
    left: 78px;
    display: inline-block;
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

    &:after {
      content: ' ';
      width: 18px;
      height: 15px;
      background: url('/images/aspas.svg') no-repeat;
      position: absolute;
      top: 20px;
      left: 50px;
      display: inline-block;
    }
  }
`

export const Border = styled.div`
  border: 1px solid #33363a;
  width: 100%;
  height: 0;
  margin-bottom: 14px;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`

export const TextCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 16px;
  width: 100%;

  p {
    font-weight: 400;
    color: #d9e3ea;
  }

  span {
    font-weight: 600;
    color: ${(props) => props.theme.colors.secondary};
  }

  @media (max-width: 768px) {
    font-size: 12px;
    text-align: center;
  }
`
