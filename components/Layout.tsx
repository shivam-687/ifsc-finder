import React, { Children, PropsWithChildren } from 'react'
import Footer from './Footer'
import Navigation from './Navigation'

const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <Navigation />
      <main>
        <div className="w-full flex items-center justify-center mt-40 mb-10">
          <h1 className='text-6xl font-extrabold text-center '>IFSC CODE FINDER</h1>
        </div>
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout