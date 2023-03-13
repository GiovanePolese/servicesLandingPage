import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  display: flex;
  justify-content: center;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  p {
    color: ${(props) => props.theme.colors.white};
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
