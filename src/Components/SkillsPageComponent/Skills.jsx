import React from 'react'
import SkillsCards from './SkillsCards';

const SkillsPage = () => {
  return (
    <>
      <div className='flex flex-col pt-10 items-center h-auto' data-aos="fade-right">
        <div className='text-black dark:text-white items-center font-bold text-6xl md:text-7xl font-roboto-condensed p-10'>
          SKILLS
        </div>
        <SkillsCards/>
      </div>
    </>
  )
}

export default SkillsPage;