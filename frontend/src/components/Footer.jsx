import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

const Footer = () => {
  const {theme,ToggleBtn} = useContext(ThemeContext)
  return (
    <div className={` postion fixed-bottom ${theme === 'light' ?'bg-primary text-light' :'bg-dark text-light'}` }>
     <p className='text-light text-center p-2'>© 2026 Swapnil Kengar. All rights reserved.</p>
    </div>
  )
}

export default Footer
