import * as S from './styles'
import { Button } from '../Button'
import { Texts } from '../Texts'
import { ModalsContext } from '../../contexts/ModalsContext'
import { useContext } from 'react'

export const SectionServices = () => {
  const { setModalsContextOpen, setModalOriginDescription } = useContext(ModalsContext)

  return (
    <S.Wrapper id="services">
      <div className="container">
        <S.Main>
          <S.Text>
            <h2>{Texts.services.title}</h2>
            <p>{Texts.services.subtitle}</p>
          </S.Text>

          <S.Cards>
            {Texts.services.icons.map((icon, index: number) => (
              <S.Card key={index}>
                <div className="content">
                  <S.CardImage>
                    <img src={icon.img} alt={'ícone de ' + icon.name} loading='lazy'/>
                  </S.CardImage>
                  <h3>{icon.name}</h3>
                  <p>{icon.description}</p>
                </div>
                <div>
                  <Button
                    buttonId={icon.id}
                    text={icon.cta}
                    width="200px"
                    color="white"
                    textColor="primary"
                    hoverColor="lightGreyDark"
                    onClick={() => {
                      setModalOriginDescription(icon.name)
                      setModalsContextOpen((current) => !current)
                    }}
                  />
                </div>
              </S.Card>
            ))}
          </S.Cards>
        </S.Main>
      </div>
    </S.Wrapper>
  )
}
