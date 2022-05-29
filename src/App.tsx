import { useState } from 'react'
import { Router, BrowserRouter, Routes, Route } from 'react-router-dom'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import SharedLayout from './components/SharedLayout'
import Cart from './routes/Cart'
import Categories from './routes/Categories'
import Home from './routes/Home'
import RouteNotFound from './routes/RouteNotFound'
import GlobalStyle from './styles/GlobalStyle'

const placeHolderTheme: DefaultTheme = {

}


const App = () => {

  return (
    <BrowserRouter >
      <ThemeProvider theme={placeHolderTheme}>
        <GlobalStyle />
        <SharedLayout />
      </ThemeProvider>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='categories' element={<Categories />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
