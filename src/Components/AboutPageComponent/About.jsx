import React from 'react'
import SkillsCards from './SkillsCards';

const AboutPage = () => {
  return (
    <>
      <div className='flex flex-col p-10 items-center'>
        <div className='text-black dark:text-white items-center font-bold text-6xl md:text-7xl font-roboto-condensed'>
          ABOUT ME
        </div>
        <div className='p-2 text-black dark:text-white'>
          <p>
            Aspiring software developer passionate about building scalable, efficient, and user-focused solutions.
            Known for a strong foundation in core programming skills and a drive to stay updated with evolving technologies.
            Quick to learn and adapt, with hands-on experience in collaborative team environments.
            I aim to leverage my skills to contribute meaningfully to a dynamic organization.
            Seeking a challenging opportunity to grow alongside a team committed to innovation, excellence and to make a meaningful impact and contribute to both personal and organizational growth.
          </p>
        </div>
        <div className='text-black dark:text-white items-center font-bold text-6xl md:text-7xl font-roboto-condensed'>
          SKILLS
        </div>
        <SkillsCards/>
      </div>
    </>
  )
}

export default AboutPage