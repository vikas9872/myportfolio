import React, { useEffect } from 'react';
import education from '../EducationList/education';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EducationPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col pt-10 items-center h-auto">
      <div
        className="text-black dark:text-white items-center font-bold text-6xl md:text-7xl font-roboto-condensed p-10"
        data-aos="fade-right"
      >
        EDUCATION
      </div>
      <div className="flex flex-wrap gap-12 bg-white dark:bg-black justify-center items-center">
        {education.map((edu, index) => (
          <div
            key={index}
            className="group h-[200px] w-[280px] sm:w-[400px] sm:h-[224px] [perspective:1000px] relative"
            data-aos="flip-right"
          >
            <div className="relative h-full w-full border-2 rounded-xl shadow-2xl dark:shadow-2xl dark:shadow-gray-700 dark:border-gray-700 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front Side */}
              <div className="absolute inset-0 h-full w-full">
                <img src={edu.school} alt="images not found" className='object-cover rounded-xl h-full w-full' />
              </div>
              {/* Back Side */}
              <div className="absolute inset-0 h-full w-full rounded-xl bg-white dark:bg-black px-6 text-center text-black dark:text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex flex-col items-center justify-center h-full">
                  <h1 className="text-2xl font-bold">{edu.name}</h1>
                  <p className='text-lg'>{edu.course}</p>
                  <p className="text-lg">{edu.yoc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default EducationPage;
