import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  background-color: ${(props) => props.theme.colors.grey};

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 768px) {
      width: 85%;
    }
  }

  h3 {
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fonts.size.xsmall};
  }
`

export const Content = styled.div`
  width: 700px;
  display: flex;
  justify-content: center;
  margin: 50px 0;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
  }

  img {
    width: 32px;
    margin-bottom: 10px;
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
  }

  a:not(:last-child) {
    margin-bottom: 35px;
  }

  @media (min-width: 768px) {
    a:not(:last-child) {
      padding-right: 15px;
      margin-right: 15px;
      border-right: 1px solid white;
      margin-bottom: unset;
    }
  }
`
