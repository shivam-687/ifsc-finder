import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <nav>
        <div className='flex items-center py-2 px-5 container mx-auto'>
            <div className="logo text-xl font-bold">
              <Link href="/">
                <Image src="/assets/logos/logo.png" alt='IFSC: logo' width={50} height={50}/>
              </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navigation