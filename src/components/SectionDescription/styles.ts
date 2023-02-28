import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #151717;
  display: flex;
  justify-content: center;
  margin-top: 200px;

  @media (max-width: 768px) {
    margin-top: 50px;
    height: fit-content;
  }
  
  @media (min-width: 768px) {
    height: 100vh;
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
    color: #D9E3EA;
    font-size: 4.0rem;
  }

  p {
    color: #9BA9B4;
    font-size: 1.8rem;
    
  }

  @media (max-width: 768px) {
    gap: 16px;

    h2 {
    font-size: 2.6rem;
  }

  p {
    color: #9BA9B4;
    font-size: 1.4rem;
    
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
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;

  h3 {
    color: #D9E3EA;
    font-size: 2.4rem;
    font-weight: bold;
  }

  p {
    color: #9BA9B4;
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    gap: 1.6rem;

    h3 {
    font-size: 2.2rem;
    }

    p {
    font-size: 1.2rem;
    }
  }

`

export const CardImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5D5DFF;
  border-radius: 50%;
  min-width: 60px;
  max-width: 60px;
  width: 60px;
  max-height: 60px;
  min-height: 60px;
  height: 60px;
`