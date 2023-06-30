import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/DefaultTheme";
import { GloabalStyle } from "./styles/global";
import {Transactions} from "./pages/Transactions";
import { TransactionsProvider } from "./context/TransactionsContext";

export function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <GloabalStyle/>
      <TransactionsProvider>
        <Transactions/>
      </TransactionsProvider>
      


    </ThemeProvider>
    
  )
}


