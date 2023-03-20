import * as S from './styles'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <S.Wrapper>
      <div className="container">
        <h3>{year}@ Todos os direitos reservados</h3>
      </div>
    </S.Wrapper>
  )
}
