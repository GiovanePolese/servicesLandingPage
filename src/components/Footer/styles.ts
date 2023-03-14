import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  h3 {
    color: white;
    font-size: ${(props) => props.theme.fonts.size.xsmall};
  }
`
