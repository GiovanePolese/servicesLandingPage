'use client'

import GlobalStyle from '../../styles/global'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/theme'

import * as S from './styles'

import { SectionRegisterDone } from '../../components/SectionRegisterDone'

import { WhatsappIcon } from '../../components/WhatsappIcon'

export default function RegisterDone() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <WhatsappIcon/>
      <S.Sections>
        <SectionRegisterDone/>
      </S.Sections>
    </ThemeProvider>
  )
}