import { Routes, Route } from 'react-router-dom'
import { ModalsContextProvider } from './contexts/ModalsContext'
import { Home } from './pages/Home'

export function Router() {
  return (
    <ModalsContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ModalsContextProvider>
  )
}
