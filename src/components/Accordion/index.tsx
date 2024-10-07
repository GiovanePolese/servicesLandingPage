import React, { useState } from 'react'
import AccordionItem from '../AccordionItem'
import { Texts } from '../Texts'
import { FaqType } from '../TextsTypes'
import * as S from './styles'

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const renderedQuestionsAnswers = Texts.faq.map(
    (item: FaqType, index: number) => {
      const showDescription = index === activeIndex ? 'show-description' : ''
      const fontWeightBold = index === activeIndex ? 'font-weight-bold' : ''
      const ariaExpanded = index === activeIndex
      return (
        <AccordionItem
          showDescription={showDescription}
          fontWeightBold={fontWeightBold}
          ariaExpanded={ariaExpanded}
          item={item}
          index={index}
          onClick={() => {
            if (activeIndex !== index) {
              setActiveIndex(index)
            } else {
              setActiveIndex(-1)
            }
          }}
          key={index}
        />
      )
    },
  )

  return (
    <S.Wrapper>
      <div className="faq">
        <h2 className="faq__title">Dúvidas Frequentes</h2>
        <dl className="faq__list">{renderedQuestionsAnswers}</dl>
      </div>
    </S.Wrapper>
  )
}

export default Accordion
