import { MouseEvent } from 'react'
import * as S from './styles'

type ButtonProps = {
  text: string
  onClick?: (ev: MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <S.Button onClick={onClick}>
      <button>{text.toUpperCase()}</button>
    </S.Button>
  )
}
