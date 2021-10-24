import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Container({children}) {
     const {theme} = useContext(ThemeContext)
     const {isDarkTheme ,light, dark} = theme
     const style = isDarkTheme ? dark : light
  return (
    <div className="container" style={{backgroundColor: style.backgroundColor}}>
         {children}
    </div>
  )
}
