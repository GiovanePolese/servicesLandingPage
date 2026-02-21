import * as S from './styles'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <S.Wrapper>
      <div className="container">
        <S.Content>
          <a href="https://www.instagram.com/poleseaudiovisual/" target="_blank" id="instagram_footer">
            <img src="/images/logo-instagram.png" alt="instagram logo" />
            <p>@poleseaudiovisual</p>
          </a>
          <a href="https://wa.me/554198212509" target="_blank" id="whatsapp_footer">
            <img src="/images/whatsapp.png" alt="whatsapp logo" />
            <p>(41) 9821-2509</p>
          </a>
        </S.Content>
        <h3>{year}@ Todos os direitos reservados</h3>
      </div>
    </S.Wrapper>
  )
}
