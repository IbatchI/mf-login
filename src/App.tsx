import { Suspense } from 'react'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'

import '../node_modules/lh-my-first-storybook/dist/assets/style.css'

import { routes } from './routes/Routes'

function App() {
  return (
    <>
      <h1>Login micro frontend</h1>
      <Suspense fallback={'Cargando'}>
        <BrowserRouter>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route element={<Component />} key={path} path={path} />
            ))}

            {/* Ruta predeterminada en caso de que no se encuentre ninguna ruta */}
            <Route element={<Navigate replace to={'/'} />} path='/*' />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App
