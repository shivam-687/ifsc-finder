import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <nav>
        <div className='flex items-center py-2 px-5'>
            <div className="logo text-xl font-bold">
              <Link href="/">IFSC Code Finder</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navigation