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
  modalOriginDescription: string
  setModalOriginDescription: Dispatch<SetStateAction<string>>
}

type ModalsContextProviderProps = {
  children: ReactNode
}

export const ModalsContext = createContext({} as ModalsContextProps)

export function ModalsContextProvider({
  children,
}: ModalsContextProviderProps) {
  const [modalsContextIsOpen, setModalsContextOpen] = useState(false)
  const [modalOriginDescription, setModalOriginDescription] = useState('')

  return (
    <ModalsContext.Provider
      value={{
        modalsContextIsOpen,
        setModalsContextOpen,
        modalOriginDescription,
        setModalOriginDescription,
      }}
    >
      {children}
    </ModalsContext.Provider>
  )
}
