import styled from 'styled-components'

export const Wrapper = styled.section`
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  strong {
    color: ${(props) => props.theme.colors.secondary};
  }

  .container {
    display: flex;
    justify-content: center;
  }

  img {
    top: 10px;
    right: 30px;
    position: fixed;
    width: 100px;
    height: 100px;
    cursor: pointer;
    filter: invert(100%);
  }

  @media (max-width: 768px) {
    img {
      top: 8px;
      right: 10px;
    }
  }
`

export const Container = styled.div`
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgroundColor};

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`

export const Dropback = styled.div`
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: rgba(15, 15, 15, 0.95);
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 400px;
  gap: 24px;

  p.footer{
    font-size: 1rem;
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  min-width: 500px;

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    
    input {
      color: white;
    }

    @media (max-width: 768px) {
      min-width: 340px;
      max-width: 500px;
    }
  }

  input {
    font-size: 1.6rem;
    padding: 20px 24px;
    border-radius: 50px;
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    background-color: ${(props) => props.theme.colors.black};

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    min-width: unset;
  }
`
