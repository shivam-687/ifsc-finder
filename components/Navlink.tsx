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

    function isSame(link1: string, link2: string) {
      const l1 = link1;
      const l2 = link2;

      // if(link1 === '/' && link2 === '/') {
      //   console.log(link1, link2)
      //   return true;
      // };
      console.log(link1.replace('/',''), link2.replace('/',''))
      if(link1 === '/'){

        return link1 === link2;
      }
      const check = l1.replace('/','').startsWith(l2.replace('/', ''));
      return check;
    }

    useEffect(() => {
      if(isSame(router.asPath, props.link)){
        console.log("IS SAME tru", isSame(router.asPath, props.link))
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