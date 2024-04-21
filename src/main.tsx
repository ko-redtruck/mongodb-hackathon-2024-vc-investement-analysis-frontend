import App from './App.tsx'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    correct_green: "#32cd32"
  },
})



const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Container maxW={'80rem'}>
        <App />  
      </Container>
    </ChakraProvider>
  </React.StrictMode>,
)