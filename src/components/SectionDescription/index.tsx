import * as S from './styles'
import { Button } from '../Button'
import { Texts } from '../Texts'
import { ModalsContext } from '../../contexts/ModalsContext'
import { useContext } from 'react'

export const SectionDescription = () => {
  const { setModalsContextOpen } = useContext(ModalsContext)

  return (
    <S.Wrapper id="description">
      <S.Main>
        <S.Text>
          <h2>{Texts.description.title}</h2>
          <p>{Texts.description.subtitle}</p>
        </S.Text>

        <S.Cards>
          {Texts.description.icons.map((icon, index: number) => (
            <S.Card key={index}>
              <S.CardImage>
                <img src={icon.img} alt="icone" />
              </S.CardImage>
              <h3>{icon.name}</h3>
              <p>{icon.description}</p>
            </S.Card>
          ))}
        </S.Cards>

        <Button
          text={Texts.description.button}
          onClick={() => setModalsContextOpen((current) => !current)}
        />
      </S.Main>
    </S.Wrapper>
  )
}
