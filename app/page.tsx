'use client'

import { Home } from '../src/pages/Home'
import { ModalsContextProvider } from '../src/contexts/ModalsContext'

export default function HomePage() {
  return (
    <ModalsContextProvider>
      <Home />
    </ModalsContextProvider>
  )
}
