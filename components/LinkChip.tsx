import Link from 'next/link';
import React, { PropsWithChildren } from 'react'

export type LinkChipProps = {
    image?: string;
    icon?: React.ReactNode,
    link: string,
    lable?: string
}

const LinkChip = (props: PropsWithChildren<LinkChipProps>) => {
    return (
        <span className='inline-flex shadow shadow-primary/20 text-purple-500 rounded w-full max-w-xs items-center justify-left capitalize p-2'>
            {
                props.icon && !props.image && <span className='text-4xl mr-2'>{props.icon}</span>
            }
            <Link className='capitalize' href={props.link}>{props.children || props.lable}</Link>
        </span>
    )
}

export default LinkChip