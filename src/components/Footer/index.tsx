import * as S from './styles'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <S.Wrapper>
      <h3>{year}@ Todos os direitos reservados</h3>
    </S.Wrapper>
  )
}
