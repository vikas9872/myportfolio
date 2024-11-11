import React from 'react'
import skills from '../SkillsList/skills'
const SkillsCards = () => {
  return (
    <div className='p-2 h-full w-screen bg-white dark:bg-black flex justify-center items-center text-black dark:text-white flex-wrap gap-12'>
    {
      skills.map(skill=>(
        <div key={skill.id} className='flex h-20 w-60 items-center justify-center border-2 rounded gap-4'>
          <img src={skill.image} alt={skill.name} />
          {skill.name}
        </div>
      ))
    }
  </div>
  )
}

export default SkillsCards
