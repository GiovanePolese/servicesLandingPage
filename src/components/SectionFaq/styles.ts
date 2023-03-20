import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  margin-top: 100px;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.lightWhite};

  .container {
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      width: 85%;
    }
  }

  @media (max-width: 768px) {
    margin-top: 50px;
    height: fit-content;
  }
`
