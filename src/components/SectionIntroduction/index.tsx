import { useContext } from 'react'
import { ModalsContext } from '../../contexts/ModalsContext'
import { Button } from '../Button'
import { Texts } from '../Texts'
import * as S from './styles'

export const SectionIntroduction = () => {
  const { setModalsContextOpen, setModalOriginDescription } = useContext(ModalsContext)
  const titulo = Texts.introduction.title.toUpperCase()

  return (
    <S.Wrapper id="introduction">
      <div className="container">
        <S.ImageHeader className="mobile">
          <img src="/images/ondas.svg" alt="Ondas azuis" />
        </S.ImageHeader>

        <iframe 
          src="https://player.vimeo.com/video/1032893382?h=49e11b8b48&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title="Polese Audiovisual"
        ></iframe>
        
        <S.Main>
          <h1 dangerouslySetInnerHTML={{ __html: titulo }}></h1>
          <p dangerouslySetInnerHTML={{ __html: Texts.introduction.subtitle}}></p>

          <S.ContainerButton>
            <Button
              buttonId={Texts.services.buttonId}
              text={Texts.services.button}
              color={'secondary'}
              hoverColor={'secondaryDark'}
              textColor={'primaryDarker'}
              onClick={() => {
                setModalOriginDescription(Texts.services.button)
                setModalsContextOpen((current) => !current)
              }}
            />
          </S.ContainerButton>

          <S.ImageMain>
            <img src="/images/ondas2.svg" alt="Ondas azuis" />
          </S.ImageMain>
        </S.Main>
      </div>
    </S.Wrapper>
  )
}
