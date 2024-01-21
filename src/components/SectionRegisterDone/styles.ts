import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
  padding-top: 60px;
  background-color: #151717;
  display: flex;
  justify-content: center;

  .container {
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
