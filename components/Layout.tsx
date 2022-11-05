import React, { Children, PropsWithChildren } from 'react'
import BreadCrumb from './BreadCrumb'
import ContentComp from './ContentComp'
import Footer from './Footer'
import Navigation from './Navigation'

const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <Navigation />
      <main>
        <BreadCrumb/>
        <div className="w-full flex items-center justify-center mt-40 mb-10">
          <h1 className='text-6xl md:text-9xl drop-shadow  font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>IFSC CODE FINDER</h1>
        </div>
        {props.children}
        <ContentComp></ContentComp>
      </main>
      <Footer />
    </>
  )
}

export default Layout