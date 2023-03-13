import GlobalStyle from '../../styles/global'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/theme'

import { SectionIntroduction } from '../../components/SectionIntroduction'
import { SectionDescription } from '../../components/SectionDescription'
import { SectionDepositions } from '../../components/SectionDepositions'
import { SectionFaq } from '../../components/SectionFaq'

import { SideMenuContextProvider } from '../../contexts/SideMenuContext'

import * as S from '../../styles/styles'
import { Header } from '../../components/Header'
import { SideMenu } from '../../components/SideMenu'
import { ModalForm } from '../../components/ModalForm'

export const Home = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <SideMenuContextProvider>
        <Header />
        <SideMenu />
      </SideMenuContextProvider>
      <S.Sections>
        <S.Container>
          <SectionIntroduction />
          <ModalForm />
          <SectionDescription />
          <SectionDepositions />
          <SectionFaq />
        </S.Container>
      </S.Sections>
    </ThemeProvider>
  )
}
