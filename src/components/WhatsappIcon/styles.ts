import styled from "styled-components";

export const Icon = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 25px;
  right: 25px;
  background-color: green;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  transition: all .2s ease-in-out;
  opacity: 0.97;
  z-index: 999;

  img {
    width: 45px;
    height: 45px;
    filter: brightness(0) invert(1);
    padding-bottom: 2px;
  }

  :hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    transform: scale(0.9);
    bottom: 15px;
    right: 15px;
  }
`