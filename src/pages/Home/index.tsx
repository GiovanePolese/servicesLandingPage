import GlobalStyle from "../../styles/global";

import  { ThemeProvider } from 'styled-components';
import { defaultTheme } from "../../styles/theme";

import { Header } from "../../components/Header";
import { SectionIntroduction } from "../../components/SectionIntroduction";
import { SectionDescription } from "../../components/SectionDescription";
import { SectionDepositions } from "../../components/SectionDepositions";
import { SectionFaq } from "../../components/SectionFaq";

import * as S from "../../styles/styles"

export const Home = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <S.Sections>
        <S.Container>
          <SectionIntroduction />
          <SectionDescription />
          <SectionDepositions />
          <SectionFaq />
        </S.Container>
      </S.Sections>
    </ThemeProvider>
  )
}