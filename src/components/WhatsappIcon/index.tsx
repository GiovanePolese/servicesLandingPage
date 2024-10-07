import * as S from './styles'

export const WhatsappIcon = () => {
  const openLink = () => {
    window.open('https://wa.me/554198212509', '_blank');
  };

  return (
    <S.Icon id={'whatsappButton'} onClick={openLink}>
      <img src="/images/whatsapp.webp" alt="whatsapp icon" />
    </S.Icon>
  )
}
