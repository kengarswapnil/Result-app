import React, { useState } from 'react'
import { createContext } from 'react'


export const ThemeContext =  createContext();



const ThemeProvider = ({children}) => {
  const [theme ,setTheme] = useState('dark');
  function ToggleBtn (){
    setTheme((prev)=> prev === 'light' ? 'dark':'light');
  }
  return (
    <ThemeContext.Provider value={{theme,ToggleBtn}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
