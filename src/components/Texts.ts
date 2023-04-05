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
  faq: FaqType[]
}

export const Texts: TextsType = {
  header: [
    {
      name: 'Introdução',
      link: 'introduction',
    },
    {
      name: 'Serviços',
      link: 'services',
    },
    {
      name: 'Depoimentos',
      link: 'deposition',
    },
    {
      name: 'Dúvidas Frequentes',
      link: 'faq',
    },
  ],
  introduction: {
    title:
      'AUMENTE <strong>SEU ALCANCE</strong> COM VÍDEOS <strong>PROFISSIONAIS</strong>',
    subtitle:
      'Tenha mais conversões com vídeos e anúncios que realmente vão trazer resultados para o seu negócio',
    button: 'Quero impulsionar meu negócio.',
  },
  services: {
    title: 'Nossos serviços',
    subtitle: 'Conheça um pouco mais sobre o nosso trabalho',
    icons: [
      {
        img: '/images/iconPlay.svg',
        name: 'Produção de vídeos',
        description:
          'Produção de materiais audiovisuais para campanhas/websites, deixando seu produto mais atrativo e trazendo mais profissionalismo.',
      },
      {
        img: '/images/iconClick.svg',
        name: 'Criação de Roteiros',
        description:
          'Desenvolvemos página de vendas e captura de leads de alta performance otimizado para conversão de clientes.',
      },
      {
        img: '/images/iconChartUp.svg',
        name: 'Edição de vídeos',
        description:
          'Gestão de tráfego para campanhas no facebook e instagram estratégicas para seu público alvo. Produzimos criativos para seu anúncio e gerenciamos a campanha.',
      },
    ],
    button: 'Quero impulsionar meu negócio',
  },
  review: {
    title: 'Veja o que nossos clientes acharam',
    subtitle:
      'Conheça um pouquinho da experiência que outros clientes tiveram com nossos serviços.',
    cards: [
      {
        img: '/images/depositionMaiara.jpg',
        video: 'https://www.youtube.com/embed/dIs6O-1EZrc',
        name: 'Maiara',
        profissao: 'Presidente de time',
      },
      {
        img: '/images/depositionAdriana.jpg',
        video: 'https://www.youtube.com/embed/wpaBP6LwYrE',
        name: 'Adriana',
        profissao: 'Empresária',
      },
      {
        img: '/images/depositionAntonio.jpg',
        video: 'https://www.youtube.com/embed/dIs6O-1EZrc',
        name: 'Antonio',
        profissao: 'Empresário',
      },
      {
        img: '/images/deposition1.svg',
        video: 'https://www.youtube.com/embed/dIs6O-1EZrc',
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
      question: 'Preciso ter domínio e hospedagem para o site?',
      answer:
        'Não. Nossa equipe cuidará de toda a estrutura para você. Caso você já tenha estes serviços e deseje mantê-los, nossa equipe também estará disposta a utilizar as ferramentas de sua preferência',
    },
    {
      question: 'Posso contratar um dos serviços separadamente?',
      answer:
        'Claro. Nós disponibilizamos 3 principais serviços que também podem ser prestados separadamente como: produção de materiais audiovisuais; criação de página de vendas; e gestão de anúncios.',
    },
    {
      question: 'Quanto tempo leva para a página ficar pronta?',
      answer:
        'O tempo pode variar de acordo com suas necessidades. Porém seguindo nossos modelos pré desenvolvidos, sua página estará pronta em até 1 semana.',
    },
  ],
}
