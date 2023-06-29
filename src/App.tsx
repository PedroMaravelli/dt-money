import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/DefaultTheme";
import { GloabalStyle } from "./styles/global";
import Transaction from "./pages/Transactions";

export function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <GloabalStyle/>
      <Transaction/>
      


    </ThemeProvider>
    
  )
}


