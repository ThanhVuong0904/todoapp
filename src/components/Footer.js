import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
export default function Footer() {
     const { theme } = useContext(ThemeContext)
     const { isDarkTheme ,light, dark } = theme
     const style = isDarkTheme ? dark : light
  return (
     <div className="footer">
          <p style={{color: style.titleColorCompleted}}>Drag and drop to reorder list</p>
          <div className="attribution" style={{color: style.childrenColor}}>
               Challenge by 
               <a href="https://www.frontendmentor.io?ref=challenge"> Frontend Mentor</a>. 
               Coded by <a href="https://www.facebook.com/thanhvgg/">Thanh Vuong</a>.
          </div>
     </div>
  )
}
