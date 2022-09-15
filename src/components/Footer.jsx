import React from 'react';
import Btn_github from '../img/btn_github.svg'
import Btn_linkedin from '../img/btn_linkedin.svg'

export default function Footer() {
  return (
    <div>
        <div className='flex justify-evenly p-5'>
            <a href="https://github.com/PANCHOv96" target='_blank' rel="noopener noreferrer">
                <img src={Btn_github} alt='Github' className='w-10 dark:text-cyan-50'/>
            </a>
            <a href="https://www.linkedin.com/in/francisco-fabian-vallone-510b71223/" target='_blank' rel="noopener noreferrer">
                <img src={Btn_linkedin} alt='Linkedin' className='w-10' />  
            </a>
        </div>
        <p className='text-center pb-7'>Designed and Developed by <span>Francisco Vallone</span></p>
    </div>
  )
}