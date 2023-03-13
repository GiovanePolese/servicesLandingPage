import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  margin-top: 200px;
  justify-content: center;
  
  h2 {
    color: white;
  }

  @media (max-width: 768px) {
    margin-top: 50px;
    height: fit-content;
  }
`