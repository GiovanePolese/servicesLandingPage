import GlobalStyle from '../../styles/global'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/theme'

import { SectionIntroduction } from '../../components/SectionIntroduction'
import { SectionServices } from '../../components/SectionServices'
import { SectionDepositions } from '../../components/SectionDepositions'
import { SectionFaq } from '../../components/SectionFaq'

import { SideMenuContextProvider } from '../../contexts/SideMenuContext'

import * as S from './styles'
import { Header } from '../../components/Header'
import { SideMenu } from '../../components/SideMenu'
import { ModalForm } from '../../components/ModalForm'
import { ModalsContext } from '../../contexts/ModalsContext'
import { useContext } from 'react'
import { Footer } from '../../components/Footer'
import { WhatsappIcon } from '../../components/WhatsappIcon'

export const Home = () => {
  const { modalsContextIsOpen } = useContext(ModalsContext)

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <SideMenuContextProvider>
        <Header />
        <SideMenu />
      </SideMenuContextProvider>
      <WhatsappIcon/>
      <S.Sections>
        <SectionIntroduction />
        {modalsContextIsOpen && <ModalForm />}
        <SectionServices />
        <SectionDepositions />
        <SectionFaq />
        <Footer />
      </S.Sections>
    </ThemeProvider>
  )
}
