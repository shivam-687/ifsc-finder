import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { to_slug } from '../lib/helpers'

export type NavlinkProps = {
  link: string,
  lable?: string,
  children?: NavlinkProps,
  drawerMode?: boolean
}

const Navlink = (props: NavlinkProps) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const router = useRouter();

  function isSame(link1: string, link2: string) {
    // const l1 = link1;
    // const l2 = link2;
    // if (link1 === '/') {

    //   return link1 === link2;
    // }
    // const check = l1.replace('/', '').startsWith(l2.replace('/', ''));
    // return check;
    return to_slug(link1) === to_slug(link2)
  }

  useEffect(() => {
    if (isSame(router.asPath, props.link)) {
      // console.log("IS SAME tru", isSame(router.asPath, props.link))
      setIsActive(true);
    } else {
      setIsActive(false)
    }
  }, [router])




  return (
    <>
      {
        props.drawerMode
          ?
          <Link href={props.link} title={props.lable} className={`block p-2 rounded-md ${isActive&&'bg-primary/5 border border-primary'}`}>
            <span className={`${isActive ? 'text-primary' : 'text-gray-500'}`}>{props.lable}</span>
          </Link>
          :
          <Link href={props.link} title={props.lable}>
            <span className={`${isActive ? 'text-primary' : 'text-gray-500'} font-semibold`}>{props.lable}</span>
          </Link>
      }
    </>
  )
}

export default Navlink