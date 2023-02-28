import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: 200px;

  h2 {
    color: white;
  }

  @media (max-width: 768px) {
    margin-top: 50px;
    height: fit-content;
  }
  
  @media (min-width: 768px) {
    height: 100vh;
  }
`