import React, { useState } from "react";
import AccordionItem from "../AccordionItem";
import * as S from './styles'

const Accordion = ({ questionsAnswers }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "";
    const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccordionItem
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });

  return (
    <S.Wrapper>
      <div className="faq">
        <h1 className="faq__title">FAQ</h1>
        <dl className="faq__list">{renderedQuestionsAnswers}</dl>
      </div>
    </S.Wrapper>
  );
};

export default Accordion;