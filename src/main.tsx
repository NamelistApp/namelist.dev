import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import App from './App.tsx'
import posthog from 'posthog-js'
import { createTheme, colorsTuple, virtualColor, MantineProvider } from '@mantine/core'

posthog.init('phc_xijaNsfdqfXXTDXPoweUcvEcpcP9qwaVcCd7MIgXCWO',
  {
    api_host: 'https://us.i.posthog.com',
    person_profiles: 'identified_only'
  }
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Initial />
  </StrictMode>,
)

function Initial(): JSX.Element {
  const theme = createTheme({
    fontFamily: '"Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    colors: {
      'soft-sand': colorsTuple(
        Array.from({ length: 10 }, () => '#fcfaf8')
      ),
      'soft-sand-accent': colorsTuple(
        Array.from({ length: 10 }, () => '#f4f1ed')
      ),
      'accent': virtualColor({ name: 'accent', light: 'soft-sand-accent', dark: 'dark-7' }),
      'bg': virtualColor({ name: 'bg', light: 'soft-sand', dark: 'dark-8' }),
    },
    components: {
      Modal: {
        defaultProps: {
          radius: 'lg',
        }
      }
    }
  })

  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <App />
    </MantineProvider >
  )
}