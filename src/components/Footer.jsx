import React from 'react'

const Footer = () => {
  
  const fecha = new Date();
  const año = fecha.getFullYear();

  return (
    <>
 

    &copy; {año} Desarrollador Facundo Betancur
    </>
  )
}

export default Footer