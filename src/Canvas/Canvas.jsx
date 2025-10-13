import React from 'react'
import { useState } from 'react'

const Canvas = () => {
    const [preview, setpreview] = useState(true)
  return (
    <div className='w-full h-[100vh] bg-transparent'>
        <div className='flex font-semibold h-fit p-5 w-full items-center justify-center gap-3'>
            <div onClick={() => setpreview(true)} className={`flex items-center justify-center hover:bg-zinc-400/50 h-10 w-24 hover:cursor-pointer bg-amber-700 rounded-2xl border border-zinc-400 transition-colors duration-300 ${preview ? 'bg-zinc-400/50' : 'bg-transparent'}`}>Preview</div>
            <div onClick={() => setpreview(false)}  className={`h-10 w-24 flex items-center justify-center hover:bg-zinc-400/50 border border-zinc-400 hover:cursor-pointer bg-amber-700  transition-colors rounded-2xl duration-300 ${preview ? 'bg-transparent' : 'bg-zinc-400/50'}`}>Code</div>
        </div>

    </div>
  )
}

export default Canvas