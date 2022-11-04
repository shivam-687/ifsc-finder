import React from 'react'

const ResultChip = (props: { lable: string, value: string }) => {
    return (
        <div className="w-full flex items-center justify-center">
            <span className='inline-flex p-3 w-full gap-2' aria-valuetext={props.value}>
                <span aria-label={props.lable} className="text-primary capitalize font-bold">{props.lable}:</span>
                {props.value}
            </span>
        </div>
    )
}

export default ResultChip