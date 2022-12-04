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
        <span className='inline-flex shadow shadow-primary/20 text-primary rounded w-80 md:w-96 items-center justify-left capitalize p-2 hover:shadow-md transition duration-200 hover:shadow-primary/20'>
            {
                props.icon && !props.image && <span className='text-4xl mr-2'>{props.icon}</span>
            }
            <Link rel='next' title={`${props.lable?.toLocaleLowerCase()} ifsc code`} className='capitalize' href={props.link}>{props.children || props.lable}</Link>
        </span>
    )
}

export default LinkChip