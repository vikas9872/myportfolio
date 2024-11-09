import React from 'react'
const HomePage = () => {
    return (
        <div className='flex items-center h-dvh  p-4'>
            <div className='w-1/2 flex flex-col dark:bg-black text-black dark:text-white gap-4'>
                <p className='text-3xl'>Hello, <span>I'm</span></p>
                <p className='text-6xl font-extrabold'>Vikas</p>
                <p className='text-4xl'>Web developer</p>
                <button className='border-2 w-1/2 rounded-full border-[#000000] dark:border-[#ffff] p-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'>
                    Download CV
                </button>
            </div>
            <div className='w-1/2'>
                <img className="block dark:hidden" src="/ImageAssets/programminglogo.png" alt="programming_logo" />
                <img className="hidden dark:block" src="/ImageAssets/programminglogo.png" alt="programming_logo" />
            </div>
        </div>
    )
}

export default HomePage
