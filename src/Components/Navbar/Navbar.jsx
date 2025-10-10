import React from 'react'
import blackIcon from "../../../public/images/nexora-logo-black.png"
import whiteIcon from "../../../public/images/nexora-logo-white.png"
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'

const Navbar = () => {

      const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className=' px-4 py-4 h-20 w-full flex items-center justify-between transition-colors duration-300'>
        <div>
            <img className='w-15' src={darkMode ? whiteIcon : blackIcon} alt="" />
        </div>

        <div>
         <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded-lg bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 transition-colors duration-300"
      >
        {darkMode ? <i class="ri-sun-fill"></i>  : <i class="ri-moon-fill"></i>}
      </button>
        </div>
    </div>
  )
}

export default React.memo(Navbar);