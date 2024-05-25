import React from 'react'
import business from '../assets/portfolio/business.png'
import food from '../assets/portfolio/food.png'
import easypay from '../assets/portfolio/easypay.png'
import portfolio from '../assets/portfolio/portfolio.png'
import nuxt from '../assets/portfolio/nuxt.png'
import swift from '../assets/portfolio/swift.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src:business,
           href: "https://business-maryam.netlify.app/",
           code:"https://github.com/flawlessly-flawed/business-website"
            
        },
        {
            id: 2,
            src:easypay,
           href:"https://easypaydemo.netlify.app/",
           code:"https://github.com/flawlessly-flawed/easypay"
        },
        {
            id: 3,
            src:food,
            href: "https://flawlessly-flawed.github.io/foodwebsite/",
            code:"https://github.com/flawlessly-flawed/foodwebsite"
        },
        {
            id: 4,
            src:portfolio,
            href:"https://mariamibraheem.netlify.app/",
            code:"https://github.com/flawlessly-flawed/portfolio"
        },
        {
            id: 5,
            src:nuxt,
            
        },
        {
            id: 6,
            src:swift
        },
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b
    from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4'>
                Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 
            gap-8 px-12 sm:px-0'>

            {portfolios.map(({id, src,href,code}) =>(
                
                <div key={id} className='shadow-md shadow-gray-600
                rounded-lg'>
                    <img src={src} alt="" className='rounded-md
                    duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                       <a href={href}> <button className='w-1/2 px-6 py-3 duration-200
                        hover:scale-105'>Demo</button></a>
                        <a href={code}><button className='w-1/2 px-6 py-3 duration-200
                        hover:scale-105'>Code</button></a>
                    </div>
                
            </div>
            ))}
            
            </div>
        </div>
    </div>
  )
}

export default Portfolio