import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content px-5 py-10">
      <div className="container mx-auto flex items-center justify-center flex-col gap-2">
        <div>
          <span>Powerd By: </span>
          <a className='link link-primary' href='https://interlef.com'>Interlef Web Solutions</a>
        </div>
        <p>Copyright {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer