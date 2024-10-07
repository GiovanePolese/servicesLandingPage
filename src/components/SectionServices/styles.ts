import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.colors.lightWhite};
  display: flex;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 60px;

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
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
  margin-bottom: 80px;
  width: 70%;

  h2 {
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fonts.size.xxlarge};
  }

  p {
    color: ${(props) => props.theme.colors.primary};
    font-size: ${(props) => props.theme.fonts.size.large};
  }

  @media (max-width: 768px) {
    width: 100%;
    gap: 16px;

    h2 {
      font-size: ${(props) => props.theme.fonts.size.xxlarge};
    }

    p {
      color: ${(props) => props.theme.colors.primary};
      font-size: ${(props) => props.theme.fonts.size.xlarge};
    }
  }
`

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  align-items: flex-start;
  gap: 80px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 0;
  }
`

export const Card = styled.div`
  width: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background-color: ${(props) => props.theme.colors.primary};
  height: 500px;
  padding: 35px 28px;
  border-radius: 10px;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  h3 {
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fonts.size.large};
    font-weight: bold;
  }

  p {
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fonts.size.small};
    padding-top: 1rem;
  }

  @media (max-width: 768px) {
    gap: 1.6rem;
    width: 100%;
    height: 470px;

    h3 {
      font-size: ${(props) => props.theme.fonts.size.large};
    }

    p {
      font-size: ${(props) => props.theme.fonts.size.small};
    }
  }
`

export const CardImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  min-width: 60px;
  max-width: 60px;
  width: 60px;
  max-height: 60px;
  min-height: 60px;
  height: 60px;

  img {
    transform: scale(0.8);
  }
`
