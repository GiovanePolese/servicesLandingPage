import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 80px;
  background-color: transparent;
  z-index: 100;
  transition: background-color 0.3s ease-in;

  &.dark {
    background-color: #151717;
  }

  @media (max-width: 768px) {
    padding: 15px 20px;

    img {
      width: 220px;
      height: 27px;
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 40px;

  a {
    border: none;
    background-color: transparent;
    color: #c5d2dc;
    font-size: 16px;
    padding-bottom: 6px;
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

  @media (max-width: 768px) {
    display: none;
  }
`

export const BurguerDiv = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`
