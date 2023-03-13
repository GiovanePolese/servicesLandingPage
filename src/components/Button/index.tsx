import * as S from './styles'

type ButtonProps = {
  text: string
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <S.Button>
      <button>{text}</button>
    </S.Button>
  )
}
