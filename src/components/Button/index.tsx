import { MouseEvent } from 'react'
import * as S from './styles'

export type ButtonProps = {
  text: string
  textColor?: string
  color?: string
  hoverColor?: string
  onClick?: (ev: MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({
  onClick,
  text,
  textColor,
  color,
  hoverColor,
}: ButtonProps) => {
  return (
    <S.Button
      onClick={onClick}
      textColor={textColor}
      hoverColor={hoverColor}
      color={color}
    >
      <button>{text.toUpperCase()}</button>
    </S.Button>
  )
}
