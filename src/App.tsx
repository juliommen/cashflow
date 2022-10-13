import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/defaultTheme'
import { GlobalStyle } from './styles/global'
import { Transactions } from './pages/Transactions/index'
import { TransactionsProvider } from './contexts/transactionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div className="App">
        <TransactionsProvider>
          <Transactions />
        </TransactionsProvider>
      </div>
    </ThemeProvider>
  )
}
