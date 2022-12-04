import { useRouter } from 'next/router'
import React, { Children, PropsWithChildren, useContext } from 'react'
import AppProvider, { AppContext } from '../providers/AppProvider'
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
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Layout