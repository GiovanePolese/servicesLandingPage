# Landing Page padrão de Marketing

## | Como rodar na sua máquina

### Baixe o repositório na sua máquina
```bash
git clone https://github.com/GiovanePolese/servicesLandingPage.git
```

### Baixe as dependências
```bash
npm install
```

### Rode o projeto localmente
```bash
npm run dev
```

### Instale a extensão do ESLint oficial da Microsoft

### Verifique seu arquivo de configurações apertando ctrl+P e digite >json
```js
"editor.codeActionsOnSave": {
  // necessário conter a linha abaixo para salvar automaticamente as alterações do ESLint
  "source.fixAll.eslint": true,
},
```

## | Padrões de conteúdo
Os conteúdos devem ser atualizados diretamente no aquivo Texts.ts, que contém todas as informações de textos e links das seções

## | Cores e temas
Todas as cores devem estar no arquivo de temas `theme.ts` dentro de `./pages/styles`
Exemplo:
```js
export const defaultTheme: DefaultTheme = {
  colors:{
    primary:'#5d5dff',
    textColor: {
      primary: '#d9e3ea',
    },
    backgroundColor: '#151719',
  }
}
```

Para utilizar basta utilizar a seguinte linha de comando nos componentes de estilo
```js
${props => props.theme.colors.<sua cor>}
```
Exemplo
```css
{
  border: 1px solid ${props => props.theme.colors.borderColor};
}
```

## | Deploy
Gerar versão final com
```bash
npm run build
```

Depois subir a pasta dist em public_html no cpanel