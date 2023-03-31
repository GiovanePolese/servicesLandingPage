import { MouseEvent } from 'react'
import * as S from './styles'

export type ButtonProps = {
  text: string
  textColor?: string
  color?: string
  hoverColor?: string
  width?: string
  onClick?: (ev: MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({
  onClick,
  text,
  textColor,
  color,
  width,
  hoverColor,
}: ButtonProps) => {
  return (
    <S.Button
      onClick={onClick}
      textColor={textColor}
      hoverColor={hoverColor}
      color={color}
      width={width}
    >
      <button>{text.toUpperCase()}</button>
    </S.Button>
  )
}
