import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

type ModalsContextProps = {
  modalsContextIsOpen: boolean
  setModalsContextOpen: Dispatch<SetStateAction<boolean>>
}

type ModalsContextProviderProps = {
  children: ReactNode
}

export const ModalsContext = createContext({} as ModalsContextProps)

export function ModalsContextProvider({
  children,
}: ModalsContextProviderProps) {
  const [modalsContextIsOpen, setModalsContextOpen] = useState(false)

  return (
    <ModalsContext.Provider
      value={{ modalsContextIsOpen, setModalsContextOpen }}
    >
      {children}
    </ModalsContext.Provider>
  )
}
