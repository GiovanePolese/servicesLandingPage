import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

export const Button = styled.div<ButtonProps>`
  ${({ theme, color, hoverColor, textColor }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 400px;
    button {
      cursor: pointer;
      background-color: ${color ? theme.colors[color] : theme.colors.primary};
      color: ${textColor ? theme.colors[textColor] : theme.colors.white};
      width: 100%;
      font-size: 18px;
      font-weight: 700;
      border: none;
      border-radius: 30px;
      padding: 20px 30px;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: ${hoverColor
        ? theme.colors[hoverColor]
        : theme.colors.primaryDark};
      animation: none;
    }

    @media (max-width: 768px) {
      width: 100%;
      min-width: unset;
    }
  `}
`
