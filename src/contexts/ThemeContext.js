import React, { createContext, useState } from "react";
import BackgroundDark from '../images/bg-desktop-dark.jpg'
import BackgroundLight from '../images/bg-desktop-light.jpg'
import IconMoon from '../images/icon-moon.svg'
import IconSun from '../images/icon-sun.svg'

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
     const [theme, setTheme] = useState({
          isDarkTheme: true,
          dark: {
               "backgroundImage": `url(${BackgroundDark})`,
               "backgroundColor" : 'hsl(235, 21%, 11%)',
               "backgroundChildren" : "hsl(235, 24%, 19%)",
               "childrenColor": "hsl(234, 39%, 85%)",
               "titleColorCompleted" : "#65677c",
               "borderBottomItem" : "#35374c",
               "iconToggle" : `${IconSun}`,
               "filterColor": "#65677c",
          },
          light: {
               "backgroundImage": `url(${BackgroundLight})`,
               "backgroundColor" : 'hsl(0, 0%, 98%)',
               "backgroundChildren" : "white",
               "titleColorCompleted" : "#cccbd1",
               "childrenColor" : "#51505e",
               "borderBottomItem" : "#efeff1",
               "iconToggle" : `${IconMoon}`,
               "filterColor": "#cccbd1",
          }
     })
     const toggleTheme = () => {
          setTheme({
               ...theme,
               isDarkTheme: !theme.isDarkTheme
          })
     }
     const themeContextData = {
          theme: theme,
          toggleTheme
     }
     return (
          <ThemeContext.Provider value={themeContextData}>
               {children}
          </ThemeContext.Provider>
     )
}

export default ThemeContextProvider