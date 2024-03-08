import React from 'react'

const Footer = () => {
  let footerStyle = {
    position: "relative",
    width: "100%",
    top: "10vh",
    
  }
  return (
    <div className='bg-dark text-light' style={footerStyle}>
      <p className='text-center py-3'>Copyright &copy; mytodoslist.com</p>
    </div>
  )
}

export default Footer
