import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 32px 80px;
  background-color: transparent;
  z-index: 100;
  transition: background-color .3s ease-in;

  &.dark {
    background-color: #151717;
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 40px;

  a {
    border: none;
    background-color: transparent;
    color: #C5D2DC;
    font-size: 16px;
    cursor: pointer;
    z-index: 1;
    border-bottom: 0 transparent solid;
    transition: all 0.4s ease-in-out;

    :hover {
      font-weight: 700;
    }

    &.active {
      border-bottom: 2px white solid;
      font-weight: 700;
    }
  }
`