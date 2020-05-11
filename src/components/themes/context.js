import React, { createContext, useState, useEffect } from 'react'

const isSSR = typeof window === 'undefined'
const THEME = 'theme'
const DARK = 'dark'
const LIGHT = 'light'
export const Theme = createContext({
  theme: DARK,
  toggleTheme: () => {
    console.log('toggleTheme NOOP')
  },
})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (isSSR) return DARK
    if (localStorage.getItem(THEME) === LIGHT) return LIGHT
    return DARK
  })
  const toggleTheme = () => {
    console.log('toggleTheme')
    setTheme(theme === DARK ? LIGHT : DARK)
  }

  useEffect(() => {
    localStorage.setItem(THEME, theme)
    document.body.classList.toggle('bg-red-300', theme === DARK)
    document.body.classList.toggle('bg-blue-300', theme === LIGHT)
  }, [theme])

  return (
    <Theme.Provider value={{ theme, toggleTheme }}>{children}</Theme.Provider>
  )
}
