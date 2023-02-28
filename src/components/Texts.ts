export const Texts = {
	header: [
		{
			name: 'Introdução',
			link: 'introduction'
		},
		{
			name: 'Descrição',
			link: 'description'
		},
		{
			name: 'Depoimentos',
			link: 'deposition'
		}
	],
	introduction: {
		title: 'Crie campanhas que gerem resultado',
		subtitle: 'Aumente o engajamento em suas páginas com vídeos profissionais do seu negócio',
		button: 'Conheça os pacotes'
	},
	description: {
		title: 'Nossos serviços',
		subtitle: 'Trabalhamos cuidando de toda estratégia de marketing',
		icons: [
			{
				img: '/images/iconHD.svg',
				name: 'Criação de Landing Page',
				description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
			},
			{
				img: '/images/iconSlow.svg',
				name: 'Produção de Criativos',
				description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
			},
			{
				img: '/images/iconHD.SVG',
				name: 'Gerenciamento de anúncios',
				description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
			},
		],
		button: 'Conheça os pacotes'
	},
	review: {
		title: 'Veja o que nossos clientes acharam',
		subtitle: 'Conheça um pouquinho da experiência que outros clientes tiveram com nossos serviços.',
		cards: [
			{
				img: '/images/deposition1.svg',
				video: '/images/imageVideo.svg',
				name: 'Anastasia Dan',
				profissao: 'UX Board'
			},
			{
				img: '/images/deposition2.svg',
				video: '/images/imageVideo.svg',
				name: 'Roman Level',
				profissao: 'Marketing'
			},
			{
				img: '/images/deposition3.svg',
				video: '/images/imageVideo.svg',
				name: 'Akex Sackett',
				profissao: 'Empresário'
			},
			{
				img: '/images/deposition1.svg',
				video: '/images/imageVideo.svg',
				name: 'Akex Sackett',
				profissao: 'Empresário'
			}
		]
	},
	plans: {
		title: 'Conheça nossos planos',
		subtitle: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.',
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
		]
	},
	faq: [
		{
			question: 'Quais são as formas de pagamento?',
			answer: 'Resposta 1'
		},
		{
			question: 'Qual o valor?',
			answer: 'Resposta 2'
		},
		{
			question: 'Preciso ter Hospedagem e Domínio?',
			answer: 'Resposta 3'
		},
	]
}

export type Texts = {
	header: {
		menu1: string,
		menu2: string,
		menu3: string,
		menu4: string
	},
	introduction: {
		title: string,
		subtitle: string,
		button: string
	},
	description: {
		title: string,
		subtitle: string,
		icons: descriptionIcon[],
		button: string
	},
	review: {
		title: string,
		subtitle: string,
		cards: {
			img: string,
			video: string,
			name: string,
			profissão: string
		}[]
	},
	plans: {
		title: string,
		subtitle: string,
		cards: {
			title: string,
			subtitle: string,
		}[]
	}
}

export type descriptionIcon = {
	img: string,
	name: string,
	description: string,
}