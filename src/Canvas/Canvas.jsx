import React from 'react'
import { useState } from 'react'
import { TextRailString , TextTrailDependency, TextTrailName } from '../Animations/TextAnimations/TextTrail/textTrail'

const Canvas = ({component}) => {
  return (
    <div className='w-full h-fit bg-transparent p-10 flex flex-col gap-8 overflow-hidden'>
        <div className='flex flex-col font-semibold h-fit p-5 w-full items-start '>
            <div  className={`flex items-center justify-center text-4xl font-bold text-zinc-400 h-10 w-fit hover:cursor-pointer`}>{TextTrailName}</div>
             <div className='h-[80vh] w-full bg-[#05060A] border-2 border-zinc-400 rounded-xl'>
            {component}
            </div>
        </div>

      
          
       
            <div className='h-[100vh] w-full bg-pink-700 border-2 border-zinc-400'>

              {/* 1st Child */}
              <div className='w-full h-[30%] bg-amber-500'>
                <div className='w-full h-[20%] text-2xl font-bold text-zinc-400 bg-pink-900 flex justify-start items-center p-2'>
                  Install
                </div>
                 <div className='w-full h-[80%]flex flex-col justify-between bg-neutral-700 rounded'>
                  <div className='w-full h-[20%] font-light flex items-end justify-start p-2 bg-purple-600'>npm</div>
                  <div className='w-full h-[20%] font-semibold flex items-center justify-start px-2 py-8 bg-red-500'>
                    {TextTrailDependency}
                  </div>
                 </div>
              </div>
              {/* 1st Child */}
             
            </div>
      

       

    </div>
  )
}

export default Canvas