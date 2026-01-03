import React from 'react'
import { textanimationsconfig } from '../../data/textanimations.config'

const Sidebar = () => {
  return (
    <div className='h-full w-full bg-red-600 text-md font-semibold'>
        <div>
            <div className='h-fit text-center bg-blue-400'>
            <h3>{textanimationsconfig[0].categoryName}</h3>
            </div>
            <div className='h-fit flex flex-col bg-pink-500'>
                {
                    textanimationsconfig[0].items.map((items , key) => (
                        <div className='gap-2 hover:cursor-pointer hover:bg-zinc-500 duration-200' key={items.slug}>
                            {items.name}
                        </div>
                    ))
                }

            </div>
        </div>
    </div>
  )
}

export default Sidebar