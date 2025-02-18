'use client'

import React from 'react'
import Image from 'next/image' 
import { IoLogoVercel } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { TbBrandSocketIo } from "react-icons/tb";
import Signore from '@/images/Signore.png';
import Link from "next/link";
import Webscraper from "@/images/Webscraper.png";
import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import TrabajofinalPP2 from '@/images/Trabajo-final-PP2.png';
import GeoIp from '@/images/Geo-IP.png';
import PhoneOSINT from '@/images/PhoneOSINT.png';


const Portfolio = () => {
  return (
    <>
      <div id='PORTFOLIO' className='w-4/5 max-[1000px]:ml-0 ml-20 max-[1000px]:w-full  mt-5 font-serif' >
       
        <h2 className='mt-8 text-2xl'> <b> Todos mis proyectos</b></h2>
        <p className='mt-5'> <b>TimbreWeb: </b> Como su nombre lo indica es un timbre diseñado para poder usarse en edificios.
          En mi LinkedIn muestro el video de como funciona. 
        </p>
        <Link className='text-blue-700 hover:text-black text-xl' href='https://www.linkedin.com/feed/update/urn:li:activity:7297370305231032320/' target='_blank' rel='noopener noreferrer'>LinkedIn</Link>  
        
       
        <div className='grid grid-cols-1 gap-3 mt-4 '>
            <div className="flex items-center ">
              <FaReact /> ReactJS18
            </div>
            <div className="flex items-center ">
              <SiTailwindcss /> TailwindCSS
            </div>
            <div className="flex items-center ">
              <FaNode /> NodeJS
            </div>
            <div className="flex items-center">
              <TbBrandSocketIo /> Socket.io
            </div>
          </div>
        
        <div className='mt-5 '>
            <p><b>Portfolio: </b>Desarrollo Front-end, que se
            enfoca en lo simple, experiencia de usuario y diseño responsivo. <Link className='text-blue-700 hover:text-black text-xl' href='https://github.com/RedLineFB/Porfolio-NextJS' target='_blank' rel='noopener noreferrer'>GitHub</Link>    
            </p>
            <div className='grid grid-cols-1 gap-3 '>
              <div className="flex items-center mt-2">
                <IoLogoVercel /> NextJS14
              </div>
              <div className="flex items-center ">
                <FaReact /> ReactJS18
              </div>
              <div className="flex items-center ">
                <SiTailwindcss /> TailwindCSS
              </div>
              
              <div className="flex items-center">
                <FaCss3Alt /> CSS Modules
              </div>               
            
            </div>

              <p className='mt-14'> <b>Signore:</b> <b>Desarrollo Front-end en React18</b>, que actualmente está
              publicado como versión Demo. Webscraper propio: En Python 3 para comparar precios con otros sitios web.
              </p>
             
              <div className='grid grid-cols-2 gap-1 '>
              
                <div className="flex items-center mt-5">
                  <FaReact  /> ReactJS18
                </div>
                
                <div className="flex items-center mt-5">
                <FaPython /> Python3
                </div>     
                
                <div className="flex items-center mt-5">
                  <FaCss3Alt /> CSS3
                </div>

              </div>
              
              <div className='grid grid-cols-2 items-center  mt-2 '>
                <Link href='https://signore.netlify.app/' target='_blank' rel='noopener noreferrer'>
                <Image className='w-80  mt-3 hover:scale-105 transition-all ' src={Signore}  alt="Signore" />
                </Link>
                <Link  href='https://github.com/RedLineFB/WebScraping-Precios' target='_blank' rel='noopener noreferrer'>
                <Image className='w-72  mt-3  hover:scale-105 transition-all' src={Webscraper} alt="WebScraper Python3"/>
                </Link>
              </div>

              <p className='mt-14'><b>Visual Basic:</b> Desarrollo de macros en Visual Basic para Excel. Creación de video en Youtube, enseñando a programar macros. <Link className='text-blue-700 hover:text-black' href='https://www.linkedin.com/in/facundo-betancur-33659a124/' target='_blank' rel='noopener noreferrer'>LinkedIn</Link> y <Link className='text-blue-700 hover:text-black' href='https://github.com/RedLineFB' target='_blank' rel='noopener noreferrer'>GitHub</Link>
              </p>

              <p className='mt-14'> Trabajo final Front-end: Práctica profesionalizante para <b>recibirme de Técnico Superior en Programación.</b> </p>
              <div className='grid grid-cols-1 gap-1 '>
              
                <div className="flex items-center mt-5">
                  < FaHtml5 /> HMTL5
                </div>
                
                <div className="flex items-center mt-5">
                  <FaCss3Alt /> CSS3
                </div>

                <div className="flex items-center mt-5">
                < IoLogoJavascript/> JavaScript
                </div>     

              </div>
              <Link  href='https://rpropiedades.netlify.app/' target='_blank' rel='noopener noreferrer'>
                <Image className='w-72  mt-3  hover:scale-105 transition-all' src={TrabajofinalPP2} alt="Práctica profesionalizante Teclab"/>
              </Link>


              <p className='mt-10'>Proyectos de OSINT(Open source intelligence).<b> Geo-IP</b> es un script para geolocalizar una IP y <b>PhoneOSINT</b> script para geolocalizar un número de teléfono.</p>
              <div className="flex items-center mt-5">
                <FaPython /> Python3
              </div>                
              
              <div className='grid grid-cols-2 items-center  mt-2 '>
                <Link href='https://github.com/RedLineFB/Geo-IP' target='_blank' rel='noopener noreferrer'>
                <Image className='w-80  mt-3 hover:scale-105 transition-all ' src={GeoIp}  alt="Signore" />
                </Link>
                <Link  href='https://github.com/RedLineFB/PhoneOSINT' target='_blank' rel='noopener noreferrer'>
                <Image className='w-80  mt-3  hover:scale-105 transition-all' src={PhoneOSINT} alt="WebScraper Python3"/>
                </Link>
              </div>
        
        </div>
     
      </div>
    </>
  )
}

export default Portfolio;