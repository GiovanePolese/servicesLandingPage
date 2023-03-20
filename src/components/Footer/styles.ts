import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  background-color: ${(props) => props.theme.colors.lightWhite};

  .container {
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      width: 85%;
    }
  }

  h3 {
    color: ${(props) => props.theme.colors.grey};
    font-size: ${(props) => props.theme.fonts.size.xsmall};
  }
`
