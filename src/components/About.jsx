import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800
     to-black text-white '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
            justify-center w-full h-full'>
            <div className='pb-8' >
                <p className='text-4xl font-bold inline 
                border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
            Welcome to my portfolio! I'm Maryam, 
            a dedicated software developer with a passion for empowering women
             in tech to reach new heights. With a strong foundation in programming and a keen eye for detail,
              I strive to create innovative solutions that make a positive impact in the world.
             </p>
             <br />
             <p className='text-xl'>Driven by my unwavering commitment to excellence,
              I approach each project with enthusiasm and determination. 
              Whether it's crafting elegant code or collaborating with teams to bring ideas to life,
              I thrive in dynamic environments where creativity and problem-solving skills are put to the test.</p>
        </div>
    </div>
  )
}

export default About