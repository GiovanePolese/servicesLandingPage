import { slide as Menu } from 'react-burger-menu'

export const BurgerMenu = () => {
  return (
    <Menu pageWrapId={'page-wrap'}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  )
}
