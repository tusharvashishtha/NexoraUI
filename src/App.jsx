import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Testing1 from './Components/Testing/Testing1'
import Sidebar from './Components/Sidebar/Sidebar'

const App = () => {
  return (
    <div className='h-[100vh] width-[100vw]'>
      <Navbar />

      <div className='h-[60vh] w-[50vw]'>
      <Sidebar />
      </div>
    </div>
  )
}

export default App