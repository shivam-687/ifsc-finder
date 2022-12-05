import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export type NavlinkProps = {
    link: string,
    lable?: string,
    children?: NavlinkProps
}

const Navlink = (props: NavlinkProps) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const router = useRouter();

    useEffect(() => {
      if(router.asPath.startsWith(props.link)){
        setIsActive(true);
      }else{
        setIsActive(false)
      }
    }, [router])
    

  return (
    <>
        <Link href={props.link} title={props.lable}>
            <span className={`${isActive?'text-primary': 'text-gray-500'} font-semibold`}>{props.lable}</span>
        </Link>
    </>
  )
}

export default Navlink