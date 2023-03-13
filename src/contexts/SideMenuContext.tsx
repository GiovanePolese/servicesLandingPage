import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

type SideMenuContextProps = {
  sideMenuIsOpen: boolean
  setSideMenuOpen: Dispatch<SetStateAction<boolean>>
}

type SideMenuContextProviderProps = {
  children: ReactNode
}

export const SideMenuContext = createContext({} as SideMenuContextProps)

export function SideMenuContextProvider({
  children,
}: SideMenuContextProviderProps) {
  const [sideMenuIsOpen, setSideMenuOpen] = useState(false)

  return (
    <SideMenuContext.Provider value={{ sideMenuIsOpen, setSideMenuOpen }}>
      {children}
    </SideMenuContext.Provider>
  )
}
