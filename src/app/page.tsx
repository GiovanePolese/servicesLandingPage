'use client'

import { Home } from '../pages/Home'
import { ModalsContextProvider } from '../contexts/ModalsContext'

export default function HomePage() {
  return (
    <ModalsContextProvider>
      <Home />
    </ModalsContextProvider>
  )
}
