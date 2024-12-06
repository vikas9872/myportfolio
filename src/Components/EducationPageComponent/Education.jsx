import React from 'react'
import EducationCards from './EducationCards'

const EducationPage = () => {
  return (
    <div className='flex flex-col pt-10 items-center h-auto'>
      <div className='text-black dark:text-white items-center font-bold text-6xl md:text-7xl font-roboto-condensed p-10' data-aos="fade-right">
          EDUCATION
      </div>
      <EducationCards/>
    </div>
  )
}

export default EducationPage
