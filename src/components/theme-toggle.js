import React from 'react'
import { Theme } from './themes/context'

const ThemeToggleComponent = function ThemeToggle(props) {
  return (
    <Theme.Consumer>
      {(context) => {
        const { theme, toggleTheme } = context
        let btnClasses = 'rounded-full w-8 p-1 ml-3'
        let toggleClasses =
          'block rounded-full w-3 h-3 transition-all duration-500 ml-0'
        if (theme === 'dark') {
          btnClasses += ' bg-gray-200'
          toggleClasses += ' bg-gray-700'
        }
        if (theme === 'light') {
          btnClasses += ' bg-gray-700'
          toggleClasses += ' bg-gray-200 ml-auto'
        }
        return (
          <button
            {...props}
            type="button"
            className={btnClasses}
            aria-pressed={theme === 'dark'}
            aria-label="Toggle dark theme"
            onClick={toggleTheme}
          >
            <span className={toggleClasses}></span>
          </button>
        )
      }}
    </Theme.Consumer>
  )
}

export default ThemeToggleComponent
