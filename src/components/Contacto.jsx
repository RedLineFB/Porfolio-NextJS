'use client'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contacto = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xxsk2gm', 'template_sdtq9df', form.current, {
        publicKey: 'GEgicfDU9KJpjU2Ma',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessageSent(true);
          setTimeout(() => {
            setMessageSent(false); // Después de 5 segundos, oculta el mensaje
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessageSent(false);
        },
      );
  };

  return (
    <>
     <p className='flex items-center justify-center text-3xl mt-5'> Contácteme </p>
    <form id='CONTACTO' className=''  ref={form} onSubmit={sendEmail}>
        
      <div className='flex flex-col items-center gap-3'>
        <label className='text-2xl mt-5'>Nombre</label>
        <input className='border-blue-600 border-4 ml-3 w-80' type="text" name="user_name" required/>
     
        <label className='text-2xl '>Email</label>
       <input className='border-blue-700 border-4 ml-5 w-80' type="email" name="user_email" required />
    
        <label  className=' text-2xl'>Mensaje</label>
        <textarea className='border-blue-600 border-4 ml-3 md:w-96 h-32  w-80' name="message"  style={{ resize: 'none' }} />
      
        <input className=' rounded-xl mt-5 cursor-pointer hover:bg-sky-600 border-blue-600 border-2 w-40 md:ml-10 ' type="submit" value="Enviar Mensaje" />
      </div>
      {messageSent && <p className='flex justify-center  mt-1'>El mensaje se ha enviado ✔</p>}
    </form>
    </>
  );
}

export default Contacto