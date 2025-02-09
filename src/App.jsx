import React, { Suspense, useEffect } from 'react'
import { useRoutes, useLocation } from 'react-router-dom'
import './App.css'
import routes from './router'
import AppHeader from './components/app-header/index'
import AppFooter from './components/app-footer/index'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import useScrollPosition from './hooks/useScrollPosition'

const theme = createTheme({
  palette: {
    mode: 'light' // or 'dark'
    // other color options...
  }
})

function App() {
  const element = useRoutes(routes)
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  // useScrollPosition();
  return (
    <ThemeProvider theme={theme}>
      <AppHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <div className='page'>{element}</div>
      </Suspense>
      <AppFooter />
    </ThemeProvider>
  )
}

export default App
