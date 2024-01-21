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
      cta: string
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
      'AUMENTE <strong>SEU ALCANCE</strong> <br/>COM VÍDEOS <strong>PROFISSIONAIS</strong>',
    subtitle:
      'Tenha mais conversões e mais engajamento com vídeos<br/>e anúncios que realmente trazem resultados',
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
          'Produção de materiais audiovisuais para campanhas/websites, deixando seu produto mais atrativo e com maior profissionalismo.',
        cta: 'Saiba Mais',
      },
      {
        img: '/images/iconClick.svg',
        name: 'Criação de Roteiros',
        description:
          'Roteiros otimizados para gerar mais engajamento nas redes sociais. Seguindo o padrão de comunicação da empresa.',
        cta: 'Saiba Mais',
      },
      {
        img: '/images/iconChartUp.svg',
        name: 'Edição de vídeos',
        description:
          'Traga os sentimentos desejados para cada imagem. A edição é onde a magia realmente acontece.',
        cta: 'Saiba Mais',
      },
    ],
    button: 'Quero minha produção audiovisual',
  },
  review: {
    title: 'Veja o que nossos clientes acharam',
    subtitle:
      'Conheça um pouquinho da experiência que outros clientes tiveram com nossos serviços.',
    cards: [
      {
        img: '/images/depositionAmalia.jpg',
        video: 'https://www.youtube.com/embed/ZbxS9WySObg',
        name: 'Amália',
        profissao: 'Senadora de Curitiba',
      },
      {
        img: '/images/depositionPri.jpg',
        video: 'https://youtube.com/embed/1sLvm-xGnXY',
        name: 'Priscila',
        profissao: 'Atleta',
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
        img: '/images/depositionMuniz.jpg',
        video: 'https://www.youtube.com/embed/KSrKWDttoxM',
        name: 'Felipe Muniz',
        profissao: 'Atleta',
      },
      {
        img: '/images/depositionBia.jpg',
        video: 'https://www.youtube.com/embed/w7K_sESgiXM',
        name: 'Bia Rangel',
        profissao: 'Atleta',
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
      question: 'Como ter meu vídeo profissional?',
      answer:
        'Basta clicar em qualquer um dos botões da página e preencher o formulário para que nossa equipe entre em contato o quanto antes para montar seu orçamento sem compromisso.',
    },
    {
      question: 'Posso contratar um dos serviços separadamente?',
      answer:
        'Claro. Nós disponibilizamos 3 principais serviços que também podem ser prestados separadamente como: roteirização, para criação de conteúdos que realmente engajam; captação de imagem e som em alta qualidade; e edição de vídeos para mostrar a melhor experiência para o expectador.',
    },
    {
      question: 'Quanto tempo leva para o vídeo ficar pronto?',
      answer:
        'O tempo pode variar de acordo com suas necessidades e a complexidade do seu vídeo. O período médio de entrega após as gravações varia de 3 a 10 dias.',
    },
    {
      question: 'Como recebo os vídeos?',
      answer:
        'Os vídeos finais são disponibilizados em um drive na nuvem, que podem ser vizualizados e baixados diretamente na plataforma.',
    },
    {
      question: 'Sou atleta, como consigo os vídeos do meu jogo?',
      answer:
        'Caso nossa equipe tenha gravado uma partida que você participou e deseja ter acesso às imagens, entre em contato pelo nosso whatsapp (41) 99821-2509 ou pelo nosso email contato@poleseaudiovisual.com.br.',
    },
  ],
}
