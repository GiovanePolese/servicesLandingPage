import * as S from "./styles"
import { Button } from "../Button";
import { Texts, descriptionIcon } from "../Texts";

export const SectionDescription = () => {
  return (
    <S.Wrapper id="description">
        <S.Main>
          <S.Text>
            <h2>{Texts.description.title}</h2>
            <p>{Texts.description.subtitle}</p>
          </S.Text>

          <S.Cards>
            {Texts.description.icons.map((icon: descriptionIcon, index: number) => (
              <S.Card key={index}>
                <S.CardImage>
                  <img src={icon.img} alt="icone HD" />
                </S.CardImage>
                <h3>{icon.name}</h3>
                <p>{icon.description}</p>
              </S.Card>
            ))}
          </S.Cards>

          <Button text={Texts.description.button} />

        </S.Main>
    </S.Wrapper>
  )
}