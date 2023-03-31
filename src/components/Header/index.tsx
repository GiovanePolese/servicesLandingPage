import * as S from './styles'
import { Turn as Hamburger } from 'hamburger-react'
import { useContext, useEffect, useState } from 'react'
import { Texts } from '../Texts'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SideMenuContext } from '../../contexts/SideMenuContext'

export const Header = () => {
  const [color, setColor] = useState(false)
  const [active, setActive] = useState('introduction')
  const { sideMenuIsOpen } = useContext(SideMenuContext)
  const { setSideMenuOpen } = useContext(SideMenuContext)

  useEffect(function mount() {
    const changeColor = () => {
      if (window.scrollY >= 100) {
        setColor(true)
      } else {
        setColor(false)
      }
    }

    const selectActiveMenu = () => {
      Texts.header.map((item) => {
        const observable = document.querySelector('#' + item.link)
        const pos = observable.getBoundingClientRect()

        if (pos.top < window.innerHeight && pos.bottom >= 0) {
          setActive(item.link)
        }
      })
    }

    window.addEventListener('scroll', () => {
      changeColor()
      selectActiveMenu()
    })

    return function unMount() {
      window.removeEventListener('scroll', changeColor)
    }
  })

  return (
    <S.Wrapper className={color ? 'dark' : ''}>
      <img src="/images/Logo_branca.png" alt="logo Polese Audiovisual branca" />
      <S.Buttons>
        {Texts.header.map((item, index) => (
          <AnchorLink
            href={'#' + item.link}
            className={item.link === active ? 'active' : ''}
            key={index}
          >
            {item.name}
          </AnchorLink>
        ))}
      </S.Buttons>

      <S.BurguerDiv>
        <Hamburger
          toggled={sideMenuIsOpen}
          toggle={setSideMenuOpen}
          color="white"
        />
      </S.BurguerDiv>
    </S.Wrapper>
  )
}
