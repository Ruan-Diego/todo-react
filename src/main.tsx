import { MantineProvider } from '@mantine/core'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './global.scss'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider
          defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </StrictMode>,
)
