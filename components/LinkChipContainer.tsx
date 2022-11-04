import React from 'react'
import LinkChip, { LinkChipProps } from './LinkChip'

export type LinkChipContainerProps = {
    chipData: LinkChipProps[]
}

const LinkChipContainer = (props: LinkChipContainerProps) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 px-5'>
        {
            props.chipData.map((chip, index) => {
                return <div className="flex items-center justify-center">
                    <LinkChip {...chip}></LinkChip>
                </div>
            })
        }
    </div>
  )
}

export default LinkChipContainer