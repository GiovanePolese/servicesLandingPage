export type FaqType = {
  question: string
  answer: string
}

export type TextsType = {
  header: {
    name: string
    link: string
  }[]
  introduction: {
    title: string
    subtitle: string
    button: string
  }
  services: {
    title: string
    subtitle: string
    icons: {
      id: string
      img: string
      name: string
      description: string
      cta: string
    }[]
    button: string
    buttonId: string
  }
  portfolio: {
    title: string
    subtitle: string
    cards: {
      img: string
      video: string
      company: string
    }[]
  }
  review: {
    title: string
    subtitle: string
    cards: {
      img: string
      video: string
      name: string
      profissao: string
    }[]
  }
  plans: {
    title: string
    subtitle: string
    cards: {
      title: string
      subtitle: string
    }[]
  }
  faq: FaqType[]
}