import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter"

const HomePage = () => {
    const [text] = useTypewriter({
        words: ['Web Developer'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 120
    });
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "./Resume/VikasShanabhogResume.pdf";
        link.download = "Vikas_Resume.pdf";
        link.click();
    }
    return (
        <div className='flex flex-col-reverse md:flex-row items-center  p-10'>
            <div className='w-full md:w-1/2 flex flex-col dark:bg-black text-black dark:text-white gap-4'>
                <p className='text-3xl'>Hello, <span>I'm</span></p>
                <p className='text-6xl font-extrabold'>Vikas</p>
                <p className='text-4xl'>{text}<Cursor cursorStyle="|" /></p>

                <button className='border-2 w-1/2 rounded-full border-[#000000] dark:border-[#ffff] p-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black' onClick={handleDownload}>
                    Resume
                </button>
            </div>
            <div className='w-full md:w-1/2 mt-4 md:mt-0'>
                <img className="block dark:hidden mx-auto" src="/ImageAssets/programminglogo.png" alt="programming_logo" />
                <img className="hidden dark:block mx-auto" src="/ImageAssets/programminglogo.png" alt="programming_logo" />
            </div>
        </div>
    );
}
export default HomePage;