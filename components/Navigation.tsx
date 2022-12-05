import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { AppContext } from '../providers/AppProvider'
import Navlink, { NavlinkProps } from './Navlink'


export const DesktopMenu = (props: {lable: string, link: string})=>{
  return (
    <Link href={props.link} title={props.lable}>{props.lable}</Link>
  )
}

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const menus: NavlinkProps[] = [
    {
      link: '/',
      lable: 'Home'
    },
    {
      link: 'about_ifsc',
      lable: 'What is IFSC'
    },
    {
      link: 'search-by-ifsc-code',
      lable: 'Search By IFSC'
    }
  ]


  return (
    <nav>
        <div className='flex items-center py-2 px-5 container mx-auto'>
            <div className="logo text-xl font-bold flex-grow-0">
              <Link href="/">
                <Image src="/assets/logos/logo.png" alt='IFSC: logo' width={50} height={50}/>
              </Link>
            </div>

            <div className="flex-grow flex items-center">
            <div className='desktop-menu hidden md:flex gap-3 items-center justify-center w-full'>
            {
              menus.map((menu, index) => {
                return <Navlink key={index} {...menu}/>
              })
            }
            </div>
            </div>

            <div className="flex-grow-0">

            </div>
        </div>
    </nav>
  )
}

export default Navigation