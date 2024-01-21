import { Routes, Route } from 'react-router-dom'
import { ModalsContextProvider } from './contexts/ModalsContext'
import { Home } from './pages/Home'
import { RegisterDone } from './pages/RegisterDone'

export function Router() {
  return (
    <ModalsContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro-concluido" element={<RegisterDone />} />
      </Routes>
    </ModalsContextProvider>
  )
}
