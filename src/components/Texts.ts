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
  description: {
    title: string
    subtitle: string
    icons: {
      img: string
      name: string
      description: string
    }[]
    button: string
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
  faq: {
    question: string
    answer: string
  }[]
}

export const Texts: TextsType = {
  header: [
    {
      name: 'Introdução',
      link: 'introduction',
    },
    {
      name: 'Descrição',
      link: 'description',
    },
    {
      name: 'Depoimentos',
      link: 'deposition',
    },
  ],
  introduction: {
    title: 'Crie campanhas que <strong>gerem resultado</strong>',
    subtitle:
      'Aumente o engajamento em suas páginas com vídeos profissionais do seu negócio',
    button: 'Conheça os pacotes',
  },
  description: {
    title: 'Apresente seu negócio',
    subtitle:
      'Mostre o quão valiosa sua marca pode ser com um storytelling que grude a atenção dos seus clientes. Tornando seus produtos irresistíveis.',
    icons: [
      {
        img: '/images/iconHD.svg',
        name: 'Vídeos em FullHD',
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
      },
      {
        img: '/images/iconSlow.svg',
        name: 'Slow Motion',
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
      },
      {
        img: '/images/iconHD.SVG',
        name: 'Instant Features',
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
      },
    ],
    button: 'Conheça os pacotes',
  },
  review: {
    title: 'Veja o que nossos clientes acharam',
    subtitle:
      'Conheça um pouquinho da experiência que outros clientes tiveram com nossos serviços.',
    cards: [
      {
        img: '/images/deposition1.svg',
        video: '/images/imageVideo.svg',
        name: 'Anastasia Dan',
        profissao: 'UX Board',
      },
      {
        img: '/images/deposition2.svg',
        video: '/images/imageVideo.svg',
        name: 'Roman Level',
        profissao: 'Marketing',
      },
      {
        img: '/images/deposition3.svg',
        video: '/images/imageVideo.svg',
        name: 'Akex Sackett',
        profissao: 'Empresário',
      },
      {
        img: '/images/deposition1.svg',
        video: '/images/imageVideo.svg',
        name: 'Akex Sackett',
        profissao: 'Empresário',
      },
    ],
  },
  plans: {
    title: 'Conheça nossos planos',
    subtitle:
      'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.',
    cards: [
      {
        title: 'Vídeo',
        subtitle: 'teste',
      },
      {
        title: 'Vídeo + 2 Stories',
        subtitle: 'teste',
      },
      {
        title: 'Personalizado',
        subtitle: 'teste',
      },
    ],
  },
  faq: [
    {
      question: 'Quais são as formas de pagamento?',
      answer: 'Resposta 1',
    },
    {
      question: 'Qual o valor?',
      answer: 'Resposta 2',
    },
    {
      question: 'Preciso ter Hospedagem e Domínio?',
      answer: 'Resposta 3',
    },
  ],
}
