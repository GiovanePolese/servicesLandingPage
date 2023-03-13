import { useContext } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SideMenuContext } from '../../contexts/SideMenuContext'
import { Texts } from '../Texts'
import * as S from './styles'

export const SideMenu = () => {
  const { sideMenuIsOpen } = useContext(SideMenuContext)
  const { setSideMenuOpen } = useContext(SideMenuContext)

  return (
    <S.Wrapper isOpen={sideMenuIsOpen}>
      <S.Buttons>
        {Texts.header.map((item, index) => (
          <AnchorLink
            href={'#' + item.link}
            key={index}
            onClick={() => setSideMenuOpen(false)}
          >
            {item.name}
          </AnchorLink>
        ))}
      </S.Buttons>
    </S.Wrapper>
  )
}
