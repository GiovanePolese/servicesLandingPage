import { MouseEventHandler } from 'react'
import { faqType } from '../Texts'

type AccordionItemProps = {
  showDescription: string
  ariaExpanded: string
  fontWeightBold: string
  item: faqType
  index: number
  onClick: MouseEventHandler<HTMLButtonElement>
}

const AccordionItem = ({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  onClick,
}: AccordionItemProps) => (
  <div className="faq__question" key={item.question}>
    <dt>
      <button
        aria-expanded={ariaExpanded}
        aria-controls={`faq${index + 1}_desc`}
        className={`faq__question-button ${fontWeightBold}`}
        onClick={onClick}
      >
        <p>{item.question}</p>
      </button>
    </dt>
    <dd>
      <p id={`faq${index + 1}_desc`} className={`faq__desc ${showDescription}`}>
        {item.answer}
      </p>
    </dd>
  </div>
)

export default AccordionItem
