'use client'

import React from 'react'
import LinkedIn from '@/images/LinkedIn.png'
import GitHub from '@/images/GitHub.png'
import Instagram from '@/images/Instagram.png'
import FacundoBetancur from '@/images/FacundoBetancur.jpg'
import FacundoBetancurResponsive from '@/images/FacundoBetancurResponsive.jpeg'
import Image from 'next/image' 
import styles from './Inicio.module.css'
import Link from 'next/link'

const Inicio = () => {
  
  return (
     <>
     <div id="INICIO" className='flex font-serif'>
      <div>
        <div className='text-lg mt-5 '>
          <div className='max-[767px]:w-full '>
            Hola. Me llamo <b>Facundo Betancur</b>. Estoy graduado de 
            <b> Técnico Superior en Programación en Teclab,</b> y soy desarrollador <b>front-end</b>.
            
            </div>
       </div>
       
       <div className='flex'>
          <div className='mt-10 max-[1023px]:ml-16 max-[767px]:ml-0' >
              <div  className='  flex text-center items-center lg:hidden max-[767px]:w-10 max-[1023px]:ml-16 max-[767px]:ml-0'> 
                <Link className={`${styles.button} flex justify-center items-center `} href="./CVFacundoBetancur.pdf" download={''}> CV </Link>  
              </div>
             <div className='max-[1000px]:flex max-[767px]:flex-col mt-5 max-[999px]:mt-8'>
              <Link className='ml-5 max-[767px]:mb-2 '  href='https://www.linkedin.com/in/facundo-betancur-33659a124/' target='_blank'  rel='noopener noreferrer'> 
                <button className='rounded-2xl text-base w-16  '>
                    <Image className='hover:scale-105 transition-all' src={LinkedIn} alt="LinkedIn" />
                    LinkedIn
                </button>
              </Link>  

              <Link className='ml-5 max-[767px]:mb-2' href='https://github.com/RedLineFB/' target='_blank' rel='noopener noreferrer'>
              <button className='rounded-2xl text-base w-16'>
                <Image className='hover:scale-105 transition-all ' src={GitHub} alt="GitHub" />
                GitHub
                </button>
              </Link>

              <Link className='ml-5' href='https://www.instagram.com/facundo_betancur97/' target='_blank' rel='noopener noreferrer'>  
                <button className='rounded-2xl  text-base w-16'>
                    <Image  className='hover:scale-105 transition-all ' src={Instagram} alt="Instagram" />
                    Instagram
                </button>
              </Link>
            </div>
          </div>
          
         {/* 
          <div className='ml-20 mt-10 flex text-center items-center max-[1023px]:hidden '> 
            <Link className={`${styles.button} flex justify-center items-center hover:text-white`} href="./CVFacundoBetancur.pdf" download={''}> 
              CV 
            </Link>  
          </div> 
          */}
          
          <div className='lg:hidden max-[767px]:w-2/4 max-[767px]:mt-8 max-[1023px]:w-1/4' >
            <Image src={FacundoBetancurResponsive}  alt="Facundo Betancur" className='ml-20'/>
          </div>
        
        </div> 
        
       </div> 
        
    <div className='max-[1023px]:hidden w-2/4'>
        <Image src={FacundoBetancur}  alt="Facundo Betancur"  />
    </div>
  
  </div>

    </>
  )
}

export default Inicio