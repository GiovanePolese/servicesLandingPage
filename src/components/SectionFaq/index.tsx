import Accordion from '../Accordion'
import * as S from './styles'

import { Texts } from '../Texts'

export const SectionFaq = () => {
  return (
    <S.Wrapper>
      <Accordion questionsAnswers={Texts.faq} />
    </S.Wrapper>
  )
}
