import styled from 'styled-components'

type WrapperType = {
  isOpen: boolean
}

export const Wrapper = styled.div<WrapperType>`
  background-color: ${(props) => props.theme.colors.burgerMenu};
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  position: fixed;
  z-index: 90;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(${(props) => (props.isOpen ? '0' : '-1200px')});
  transition: all 0.5s ease-out;

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  a {
    border: none;
    color: #c5d2dc;
    font-size: 22px;
    padding-bottom: 6px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &.active {
      border-bottom: 2px white solid;
      font-weight: 700;
    }
  }
`
