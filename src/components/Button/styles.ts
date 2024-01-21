import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

type ThemeColors = {
  white: string;
  lightWhite: string;
  lightGrey: string;
  lightGreyDark: string;
  grey: string;
  black: string;
  primaryLight: string;
  primary: string;
  primaryDark: string;
  primaryDarker: string;
  secondary: string;
  secondaryDark: string;
  burgerMenu: string;
  backgroundColor: string;
  borderColor: string;
};

export const Button = styled.div<ButtonProps>`
  ${({ theme, color, hoverColor, textColor, width }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 400px;
    button {
      cursor: pointer;
      background-color: ${color ? theme.colors[color as keyof ThemeColors] : theme.colors.primary};
      color: ${textColor ? theme.colors[textColor as keyof ThemeColors] : theme.colors.white};
      width: ${width ?? '100%'};
      font-size: 18px;
      font-weight: 700;
      border: none;
      border-radius: 30px;
      padding: 20px 30px;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: ${hoverColor
        ? theme.colors[hoverColor as keyof ThemeColors]
        : theme.colors.primaryDark};
      animation: none;
    }

    @media (max-width: 768px) {
      width: 100%;
      min-width: unset;
    }
  `}
`
