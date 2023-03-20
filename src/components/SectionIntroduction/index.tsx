import { useContext } from 'react'
import { ModalsContext } from '../../contexts/ModalsContext'
import { Button } from '../Button'
import { Texts } from '../Texts'
import * as S from './styles'

export const SectionIntroduction = () => {
  const { setModalsContextOpen } = useContext(ModalsContext)
  const titulo = Texts.introduction.title.toUpperCase()

  return (
    <S.Wrapper id="introduction">
      <div className="container">
        <S.ImageHeader className="mobile">
          <img src="/images/ondas.svg" alt="Ondas azuis" />
        </S.ImageHeader>
        <S.Main>
          <h1 dangerouslySetInnerHTML={{ __html: titulo }}></h1>
          <p>{Texts.introduction.subtitle}</p>

          <S.ContainerButton>
            <Button
              text={Texts.services.button}
              color={'secondary'}
              hoverColor={'secondaryDark'}
              textColor={'primaryDarker'}
              onClick={() => setModalsContextOpen((current) => !current)}
            />

            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/uf3QZLz7eYk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </S.ContainerButton>

          <S.ImageMain>
            <img src="/images/ondas2.svg" alt="Ondas azuis" />
          </S.ImageMain>
        </S.Main>
      </div>
    </S.Wrapper>
  )
}
