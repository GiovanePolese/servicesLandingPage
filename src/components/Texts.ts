import { TextsType } from "./TextsTypes"

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
      name: 'Portfólio',
      link: 'portfolio',
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
      '<strong>MAXIMIZE</strong> SUA PRESENÇA<br/>NAS<strong> REDES SOCIAIS</strong>',
    subtitle:
      'Tenha mais conversões e mais engajamento com <strong>vídeos</strong><br/>e criativos que realmente trazem resultados',
    button: 'Quero impulsionar meu negócio.',
  },
  services: {
    title: 'Nossos serviços',
    subtitle: 'Descubra os serviços que nossa equipe oferece para produzir o vídeo ideal para seu negócio',
    icons: [
      {
        id: 'captureButton',
        img: '/images/camera.svg',
        name: 'Gravação de vídeos',
        description:
          'Captação de imagens e áudios em alta qualidade. Cada detalhe capturado com atenção para destacar o melhor do seu projeto e/ou evento!',
        cta: 'Preciso de gravação',
      },
      {
        id: 'editingButton',
        img: '/images/edição.svg',
        name: 'Edição de vídeos',
        description:
          'Eleve seus vídeos com uma edição profissional e de alta qualidade. Dê vida às suas ideias com efeitos e cortes precisos.',
        cta: 'Preciso de edição',
      },
      {
        id: 'videoProductionButton',
        img: '/images/claquete.svg',
        name: 'Produção de vídeos',
        description:
          'Produção completa de materiais audiovisuais para campanhas, websites, Reels e redes sociais, deixando seu produto mais atrativo e com maior profissionalismo.',
        cta: 'Quero minha produção',
      },
    ],
    button: 'Quero minha produção audiovisual',
    buttonId: 'mainButton',
  },
  portfolio: {
    title: 'Conheça nossos trabalhos',
    subtitle: 'Confira alguns dos vídeos produzidos para nossos clientes',
    cards: [
      {
        img: '/images/logo_arbo.jpg',
        video: 'https://drive.google.com/file/d/1LBMFbRONY26htRxrKM6jdeHzgftyP3-4/preview',
        company: 'Arbo Crossfit',
      },
      {
        img: '/images/logo_crocodiles.jpg',
        video: 'https://drive.google.com/file/d/148G6lfQKA22V1J3Ly-Ck30oiv0qwCIkq/preview',
        company: 'Coritiba Crocodiles',
      },
      {
        img: '/images/logo_choripan.jpg',
        video: 'https://drive.google.com/file/d/1eItrTAQRJThiuSaYrdcE7DMLjKoc7zy6/preview',
        company: 'Choripan',
      },
      {
        img: '/images/logo_instituto_voce.jpg',
        video: 'https://drive.google.com/file/d/1LkIX5pzO5PAm6DJHa5n0--6ba1JFcsKv/preview',
        company: 'Instituto Você',
      },
      {
        img: '/images/logo_3R.jpg',
        video: 'https://drive.google.com/file/d/1C5Ahk73pDvcakLjFN0rLLHyOqvYyMEcm/preview',
        company: '3R Embalagens',
      },
      {
        img: '/images/logo_coldkillers.jpg',
        video: 'https://drive.google.com/file/d/1GfBXvyf6BgsWXTESvtafGgmnX8-j3Rjd/preview',
        company: 'Cold Killers',
      },
      {
        img: '/images/logo_gala.jpg',
        video: 'https://drive.google.com/file/d/1sQF_ekyRmJ3DKW5DZ0cp3n4fLSfNtRtt/preview',
        company: 'Gála Iogurte',
      },
      {
        img: '/images/logo_fortt_seguros.jpg',
        video: 'https://drive.google.com/file/d/1P-loQVS8tFuRiWK7Arq_pzsKkL8mGf-a/preview',
        company: 'Fortt Seguros',
      },
      {
        img: '/images/logo_fanny.jpg',
        video: 'https://drive.google.com/file/d/1-64L36SvXhYx4B--5MI4SXrQVaszeEG-/preview',
        company: 'Fanny 24h',
      },
      {
        img: '/images/logo_americantopteam.jpg',
        video: 'https://drive.google.com/file/d/1vHisnBCvNohNIlfNsqPI0-MJzVRCtBxy/preview',
        company: 'American Top Team',
      }
    ],
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
        profissao: 'Vereadora de Curitiba',
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
        'Basta clicar em qualquer um dos botões da página e preencher o formulário para que nossa equipe entre em contato o quanto antes para montar seu orçamento sem compromisso. Ou entre em contato pelas nossas redes.',
    },
    {
      question: 'Posso contratar um dos serviços separadamente?',
      answer:
        'Claro. Nós disponibilizamos serviços separadamente de captação de imagem e som em alta qualidade, edição de vídeos ou mesmo uma produção completa desde a idealização do projeto.',
    },
    {
      question: 'Em qual local vocês gravam?',
      answer:
        'Nossa equipe está localizada atualmente em Curitiba e Região. Nos deslocamos até o local necessário para gravações, seja na sua loja, um estúdio ou mesmo gravações externas. Para outras cidades há um adicional de transporte até o local, atendemos todo o Brasil.',
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
