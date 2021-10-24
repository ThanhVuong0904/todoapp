import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function BackgroundImage() {
     const {theme} = useContext(ThemeContext)
     const {isDarkTheme ,light, dark} = theme
     const style = isDarkTheme ? dark : light
  return (
    <div className="background" style={{backgroundImage: style.backgroundImage}}>
      
    </div>
  )
}
